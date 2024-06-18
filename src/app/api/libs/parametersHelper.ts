interface QueryOptions {
   where?: any;
   take?: number;
   skip?: number;
   select?: any;
   orderBy?: any[];
   include?: any;
}

export function parametersHelper(query: URLSearchParams): QueryOptions {
   const options: QueryOptions = {};
   console.log('inside query :>> ', query);

   // where
   if (query.has('search')) {
      const where: any = {};
      const pairs = query.get('search')!.split(',');
      pairs.forEach((field) => {
         const [key, value] = field.split(':');
         where[key] = value;
      });
      options.where = where;
   }

   // limit
   if (query.has('limit')) {
      options.take = parseInt(query.get('limit')!, 10);
   }

   // offset
   if (query.has('offset')) {
      options.skip = parseInt(query.get('offset')!, 10);
   }

   // attributes
   if (query.has('attributes')) {
      const attributes = query.get('attributes')!.split(',');
      options.select = attributes.reduce((acc: { [key: string]: boolean }, attr) => {
         acc[attr] = true;
         return acc;
      }, {});
   }

   // order
   if (query.has('sort')) {
      const orderBy: any[] = [];
      const sorts = query.get('sort')!.split(',');
      sorts.forEach((sort) => {
         const [field, direction] = sort.split(':');
         orderBy.push({ [field]: direction });
      });
      options.orderBy = orderBy;
   }

   // includes
   if (query.has('includes')) {
      const includes: any = {};
      const parts = query.get('includes')!.split(',');
      parts.forEach((part) => {
         let current = includes;
         part.split('.').forEach((key, index, array) => {
            if (!current[key]) {
               current[key] = index === array.length - 1 ? true : {};
            }
            current = current[key];
         });
      });
      options.include = includes;
   }

   return options;
}
