interface CardData { 
    title: string;
    location: string;
    poster: string;
    videoUrl: string;
}

export const cardData: CardData[] = [
    {
        title: "Dinagyang Festival",
        location: "Iloilo City",
        poster: "/images/dinagyang_img1.jpg",
        videoUrl: "/videos/LandingPageDinagyangFestival.mp4",
      },
      {
        title: "Sinulog Festival",
        location: "Cebu City",
        poster: "/images/sinulog_img1.jpg",
        videoUrl: "/videos/LandingPageSinulogFestival.mp4",
      },
      {
        title: "Ati-Atihan Festival",
        location: "Province of Aklan",
        poster: "/images/ati-atihan_img1.jpg",
        videoUrl: "/videos/LandingPageAti-AtihanFestival.mp4",
      },
]