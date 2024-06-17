- [Bookly](#bookly)
  - [User Stories](#user-stories)
    - [Admin User Stories and Sequences](#admin-user-stories-and-sequences)
      - [1. Admin Login](#1-admin-login)
      - [2. **Dashboard - Analytics and Charts**](#2-dashboard---analytics-and-charts)
      - [3. **Real-time Notifications**](#3-real-time-notifications)
      - [4. **Manage Books**](#4-manage-books)
      - [5. **Manage Orders**](#5-manage-orders)
      - [6. **User Management**](#6-user-management)
      - [7. **Payments**](#7-payments)
      - [8. **User Concerns**](#8-user-concerns)
      - [9. **Activity Logs**](#9-activity-logs)
      - [10. **Reports**](#10-reports)
      - [11. **Settings**](#11-settings)
    - [User Stories](#user-stories-1)
      - [Authentication and Registration](#authentication-and-registration)
      - [Profile Management](#profile-management)
      - [Book Browsing and Purchasing](#book-browsing-and-purchasing)
      - [Selling Books](#selling-books)
      - [Wishlist and Notifications](#wishlist-and-notifications)
      - [Account Settings and Security](#account-settings-and-security)
      - [Order Tracking and History](#order-tracking-and-history)
      - [Support and Feedback](#support-and-feedback)
  - [Use Cases](#use-cases)
    - [Admin Use Cases](#admin-use-cases)
      - [Use Case 1: Admin Login](#use-case-1-admin-login)
      - [Use Case 2: View Dashboard](#use-case-2-view-dashboard)
      - [Use Case 3: Manage Books](#use-case-3-manage-books)
      - [Use Case 4: Manage Orders](#use-case-4-manage-orders)
      - [Use Case 5: Manage Users](#use-case-5-manage-users)
      - [Use Case 6: Manage Payments](#use-case-6-manage-payments)
      - [Use Case 7: Address User Concerns](#use-case-7-address-user-concerns)
      - [Use Case 8: View Activity Logs](#use-case-8-view-activity-logs)
      - [Use Case 9: Generate Reports](#use-case-9-generate-reports)
      - [Use Case 10: Configure Settings](#use-case-10-configure-settings)
      - [Use Case 11: Real-time Notifications](#use-case-11-real-time-notifications)
    - [User Use Cases](#user-use-cases)
      - [Use Case 1: Safe Login](#use-case-1-safe-login)
      - [Use Case 2: Safe Registration](#use-case-2-safe-registration)
      - [Use Case 3: Build Profile Details](#use-case-3-build-profile-details)
      - [Use Case 4: Browse Books](#use-case-4-browse-books)
      - [Use Case 5: View Book Details](#use-case-5-view-book-details)
      - [Use Case 6: Add to Cart](#use-case-6-add-to-cart)
      - [Use Case 7: Manage Cart](#use-case-7-manage-cart)
      - [Use Case 8: Place Order](#use-case-8-place-order)
      - [Use Case 9: Order Confirmation](#use-case-9-order-confirmation)
      - [Use Case 10: Track Order Status](#use-case-10-track-order-status)
      - [Use Case 11: Request Returns and Cancellations](#use-case-11-request-returns-and-cancellations)
      - [Use Case 12: Sell Books](#use-case-12-sell-books)
      - [Use Case 13: Manage Listings](#use-case-13-manage-listings)
      - [Use Case 14: Wishlist Management](#use-case-14-wishlist-management)
      - [Use Case 15: Receive Notifications](#use-case-15-receive-notifications)
      - [Use Case 16: Manage Account Settings](#use-case-16-manage-account-settings)
      - [Use Case 17: Reset Password](#use-case-17-reset-password)
      - [Use Case 18: Contact Support](#use-case-18-contact-support)
      - [Use Case 19: Leave Reviews and Ratings](#use-case-19-leave-reviews-and-ratings)
  - [Site Map](#site-map)
    - [Admin Site Map](#admin-site-map)
      - [Dashboard](#dashboard)
      - [Books](#books)
      - [Orders](#orders)
      - [Users](#users)
      - [Payments](#payments)
      - [Support Tickets](#support-tickets)
      - [Activity Logs](#activity-logs)
      - [Reports](#reports)
      - [Settings](#settings)
      - [Notifications](#notifications)
      - [Profile](#profile)
    - [User Site Map](#user-site-map)
      - [Home](#home)
      - [Books](#books-1)
      - [Cart](#cart)
      - [Checkout](#checkout)
      - [Orders](#orders-1)
      - [Wishlist](#wishlist)
      - [Sell](#sell)
      - [Profile](#profile-1)
      - [Settings](#settings-1)
      - [Notifications](#notifications-1)
      - [Support](#support)
      - [Reviews](#reviews)
      - [Authentication](#authentication)
      - [Static Pages](#static-pages)



# Bookly

Bookly is a digital marketplace for secondhand books, tailored for readers across the Philippines. This initiative, associated with the Technological University of the Philippines, enables easy access to a wide selection of affordable literature through an organized online database.

## User Stories

### Admin User Stories and Sequences

#### 1. Admin Login

**User Story**: As an admin, I want to log in to the admin panel securely so that I can manage the marketplace.

**Sequence**:

1.  Admin navigates to the admin login page.
2.  Admin enters their email and password.
3.  Admin clicks the "Login" button.
4.  If the credentials are correct, the admin is redirected to the dashboard.
5.  If the credentials are incorrect, an error message is displayed.

**Reset Password Sequence**:

1.  Admin clicks "Forgot Password" on the login page.
2.  Admin enters their registered email address.
3.  Admin clicks the "Send OTP" button.
4.  Admin receives an OTP via email.
5.  Admin enters the OTP on the verification page.
6.  Admin clicks "Verify OTP".
7.  If OTP is correct, admin is redirected to create a new password page.
8.  Admin enters a new password and confirms it.
9.  Admin clicks "Reset Password".
10.  Password is updated, and the admin can now log in with the new password.

#### 2. **Dashboard - Analytics and Charts**

**User Story**: As an admin, I want to view analytics and charts on the dashboard so that I can monitor the performance of the marketplace.

**Sequence**:

1.  Admin logs in and is redirected to the dashboard.
2.  Dashboard displays the following sections:
    -   Overview of total sales, total users, and total orders.
    -   Charts showing daily/weekly/monthly sales trends.
    -   Recent activities (e.g., recent orders, user signups).
    -   Top-selling books.
3.  Admin can click on charts to view more detailed reports.

#### 3. **Real-time Notifications**

**User Story**: As an admin, I want to receive real-time notifications about new orders, user concerns, and system alerts so that I can address issues promptly.

**Sequence**:

1.  Admin logs in and sees a notification bell icon in the top navbar.
2.  When a new notification arrives, the bell icon shows a badge with the number of new notifications.
3.  Admin clicks the bell icon to view the notifications dropdown.
4.  Notifications are listed with the most recent ones at the top.
5.  Admin clicks on a notification to view details or take action.
6.  Notifications can be marked as read/unread or deleted.

#### 4. **Manage Books**

**User Story**: As an admin, I want to manage the list of books, including adding, editing, and removing books, so that the database stays updated.

**Sequence**:

1.  Admin navigates to the "Books" section from the sidebar menu.
2.  Admin sees a list of all books with options to add, edit, or delete.
3.  To add a new book:
    -   Admin clicks "Add Book".
    -   Admin fills in the book details (title, author, price, etc.).
    -   Admin clicks "Save".
    -   New book is added to the list.
4.  To edit an existing book:
    -   Admin clicks the "Edit" button next to the book.
    -   Admin updates the book details.
    -   Admin clicks "Save".
    -   Book details are updated.
5.  To delete a book:
    -   Admin clicks the "Delete" button next to the book.
    -   Admin confirms the deletion.
    -   Book is removed from the list.

#### 5. **Manage Orders**

**User Story**: As an admin, I want to view and manage orders so that I can ensure all transactions are processed correctly.

**Sequence**:

1.  Admin navigates to the "Orders" section from the sidebar menu.
2.  Admin sees a list of all orders with details like order ID, customer name, status, and total amount.
3.  To view order details:
    -   Admin clicks on an order.
    -   Order details page shows items ordered, customer information, and payment status.
4.  To update order status:
    -   Admin selects a new status (e.g., shipped, delivered).
    -   Admin clicks "Update Status".
    -   Order status is updated.

#### 6. **User Management**

**User Story**: As an admin, I want to manage user accounts, including activating, deactivating, and updating user information, so that I can maintain a secure user base.

**Sequence**:

1.  Admin navigates to the "Users" section from the sidebar menu.
2.  Admin sees a list of all users with options to view, edit, or deactivate accounts.
3.  To view user details:
    -   Admin clicks on a user.
    -   User details page shows personal information and account activity.
4.  To edit user information:
    -   Admin clicks "Edit" next to the user.
    -   Admin updates user details.
    -   Admin clicks "Save".
    -   User information is updated.
5.  To deactivate a user:
    -   Admin clicks "Deactivate" next to the user.
    -   Admin confirms the deactivation.
    -   User account is deactivated.

#### 7. **Payments**

**User Story**: As an admin, I want to manage and track payments so that I can ensure all financial transactions are accurately recorded.

**Sequence**:

1.  Admin navigates to the "Payments" section from the sidebar menu.
2.  Admin sees a list of all payments with details like payment ID, user, amount, method, and status.
3.  To view payment details:
    -   Admin clicks on a payment.
    -   Payment details page shows transaction information.
4.  To update payment status:
    -   Admin selects a new status (e.g., completed, failed).
    -   Admin clicks "Update Status".
    -   Payment status is updated.

#### 8. **User Concerns**

**User Story**: As an admin, I want to address user concerns and support tickets so that users have a positive experience with the application.

**Sequence**:

1.  Admin navigates to the "Support Tickets" section from the sidebar menu.
2.  Admin sees a list of all support tickets with details like ticket ID, user, subject, status.
3.  To view ticket details:
    -   Admin clicks on a ticket.
    -   Ticket details page shows user concern and communication history.
4.  To respond to a ticket:
    -   Admin types a response in the text box.
    -   Admin clicks "Send Response".
    -   User receives the response.
5.  To close a ticket:
    -   Admin changes the status to "Closed".
    -   Admin clicks "Update Status".
    -   Ticket status is updated.

#### 9. **Activity Logs**

**User Story**: As an admin, I want to view activity logs to track all actions performed by users and admins for auditing and security purposes.

**Sequence**:

1.  Admin navigates to the "Activity Logs" section from the sidebar menu.
2.  Admin sees a list of all activities with details like action, actor, date, and description.
3.  To filter logs:
    -   Admin selects filters (e.g., date range, action type).
    -   Logs are filtered based on selected criteria.
4.  To view log details:
    -   Admin clicks on a log entry.
    -   Log details page shows the full description of the action.

#### 10. **Reports**

**User Story**: As an admin, I want to generate and view various reports so that I can make informed decisions.

**Sequence**:

1.  Admin navigates to the "Reports" section from the sidebar menu.
2.  Admin selects the type of report to generate (e.g., sales report, user activity report).
3.  Admin selects filters (e.g., date range, user type).
4.  Admin clicks "Generate Report".
5.  Report is generated and displayed.
6.  Admin can download the report as a PDF or CSV file.

#### 11. **Settings**

**User Story**: As an admin, I want to configure settings for the application so that it operates according to the organization's requirements.

**Sequence**:

1.  Admin navigates to the "Settings" section from the sidebar menu.
2.  Admin sees different settings categories (e.g., General, Notifications, Security).
3.  Admin selects a category to update.
4.  Admin updates settings as needed.
5.  Admin clicks "Save".
6.  Settings are updated and applied.


### User Stories 

#### Authentication and Registration

1.  **Safe Login**:
    
    -   As a user, I want to log in securely so that my personal information is protected.
    -   As a user, I want to log in using Google or GitHub so that I can access my account easily.
2.  **Safe Registration**:
    
    -   As a new user, I want to register securely so that my personal information is protected.
    -   As a new user, I want to register using Google or GitHub so that I can create an account easily.
    -   As a new user, I want to receive an email verification with an OTP so that I can verify my account.
    -   As a user, I want to be notified that I need to verify my email before placing an order so that my account is secure.

#### Profile Management

3.  **Build Profile Details**:
    -   As a new user, I want to complete my profile details using a stepper so that my information is organized and easy to input.
    -   As a user, I want to update my profile information so that my account stays up-to-date.
    -   As a user, I want to change my email address so that I can keep my contact information current.
    -   As a user, I want to change my password so that I can maintain the security of my account.

#### Book Browsing and Purchasing

4.  **Browse Books**:
    
    -   As a user, I want to browse a list of available secondhand books so that I can find books to purchase.
    -   As a user, I want to filter and search books by category, genre, author, and price so that I can find books that match my interests.
5.  **Book Details**:
    
    -   As a user, I want to view detailed information about a book, including the description, price, condition, and seller information, so that I can make an informed purchase decision.
6.  **Add to Cart**:
    
    -   As a user, I want to add books to my cart so that I can purchase them later.
    -   As a user, I want to view and manage the items in my cart so that I can easily complete my purchase.
7.  **Place Order**:
    
    -   As a user, I want to place an order for books in my cart so that I can complete my purchase.
    -   As a user, I want to be notified that I need to verify my email before placing an order so that my account is secure.
8.  **Order Confirmation**:
    
    -   As a user, I want to receive an order confirmation notification so that I know my order has been placed successfully.
    -   As a user, I want to receive updates on the status of my order so that I know when to expect my delivery.

#### Selling Books

9.  **Sell Books**:
    -   As a user, I want to list my secondhand books for sale so that I can earn money from books I no longer need.
    -   As a user, I want to manage my listings so that I can update or remove books I have listed for sale.

#### Wishlist and Notifications

10.  **Wishlist**:
    
    -   As a user, I want to add books to my wishlist so that I can keep track of books I am interested in buying later.
    -   As a user, I want to view and manage my wishlist so that I can easily move books to my cart when I am ready to purchase them.
11.  **Notifications**:
    
    -   As a user, I want to receive real-time notifications about order status, messages, and updates so that I am always informed.
    -   As a user, I want to view my notifications so that I can stay updated on important information.

#### Account Settings and Security

12.  **Account Settings**:
    
    -   As a user, I want to access and update my account settings so that my information is accurate and up-to-date.
    -   As a user, I want to manage my notification preferences so that I only receive relevant updates.
    -   As a user, I want to enable two-factor authentication (2FA) for added security so that my account is protected.
13.  **Reset Password**:
    
    -   As a user, I want to reset my password if I forget it so that I can regain access to my account.
    
14.  **Change Email**:
    
    -   As a user, I want to change my email address so that I can keep my contact information current.
    
15.  **Personal Details**:
    
    -   As a user, I want to update my personal details (name, contact information, address) so that my profile is accurate.

#### Order Tracking and History

16.  **Track Order History**:
    
    -   As a user, I want to view my purchase history so that I can keep track of my past orders.
17.  **Track Order Status**:
    
    -   As a user, I want to track the status of my orders (to pay, to ship, to receive, to review) so that I am informed about the progress of my purchases.
18.  **Returns and Cancellations**:
    
    -   As a user, I want to request a return or cancellation of an order so that I can handle issues with my purchases.

#### Support and Feedback

19.  **Support**:
    
    -   As a user, I want to contact support if I have any issues or questions so that I can get help when needed.
    -   As a user, I want to view my support ticket history so that I can track the progress of my inquiries.
20.  **Feedback and Reviews**:
    
    -   As a user, I want to leave reviews and ratings for books I have purchased so that I can share my experience with other users.
    -   As a user, I want to view reviews and ratings from other users so that I can make informed purchase decisions.



## Use Cases

### Admin Use Cases

#### Use Case 1: Admin Login

**Description**: Admin logs into the admin panel to access management features.

**Actors**: Admin

**Preconditions**: Admin has a valid account.

**Steps**:

1.  Admin navigates to the admin login page.
2.  Admin enters their email and password.
3.  Admin clicks the "Login" button.
4.  System verifies the credentials.
5.  If credentials are correct, admin is redirected to the dashboard.
6.  If credentials are incorrect, an error message is displayed.

**Extensions**:

-   Forgot Password:
    1.  Admin clicks "Forgot Password".
    2.  Admin enters registered email address.
    3.  System sends an OTP to the email.
    4.  Admin enters the OTP.
    5.  System verifies the OTP.
    6.  Admin creates a new password.
    7.  System updates the password.
    8.  Admin logs in with the new password.

#### Use Case 2: View Dashboard

**Description**: Admin views analytics and charts on the dashboard.

**Actors**: Admin

**Preconditions**: Admin is logged in.

**Steps**:

1.  Admin logs in and is redirected to the dashboard.
2.  Dashboard displays:
    -   Total sales, total users, total orders.
    -   Daily/weekly/monthly sales trends.
    -   Recent activities (e.g., recent orders, user signups).
    -   Top-selling books.
3.  Admin clicks on charts to view detailed reports.

#### Use Case 3: Manage Books

**Description**: Admin manages the list of books, including adding, editing, and removing books.

**Actors**: Admin

**Preconditions**: Admin is logged in.

**Steps**:

1.  Admin navigates to the "Books" section from the sidebar menu.
2.  Admin sees a list of all books with options to add, edit, or delete.
3.  To add a new book:
    -   Admin clicks "Add Book".
    -   Admin fills in the book details (title, author, price, etc.).
    -   Admin clicks "Save".
    -   System adds the new book to the list.
4.  To edit an existing book:
    -   Admin clicks the "Edit" button next to the book.
    -   Admin updates the book details.
    -   Admin clicks "Save".
    -   System updates the book details.
5.  To delete a book:
    -   Admin clicks the "Delete" button next to the book.
    -   Admin confirms the deletion.
    -   System removes the book from the list.

#### Use Case 4: Manage Orders

**Description**: Admin views and manages product orders.

**Actors**: Admin

**Preconditions**: Admin is logged in.

**Steps**:

1.  Admin navigates to the "Orders" section from the sidebar menu.
2.  Admin sees a list of all orders with details like order ID, customer name, status, and total amount.
3.  To view order details:
    -   Admin clicks on an order.
    -   Order details page shows items ordered, customer information, and payment status.
4.  To update order status:
    -   Admin selects a new status (e.g., shipped, delivered).
    -   Admin clicks "Update Status".
    -   System updates the order status.

#### Use Case 5: Manage Users

**Description**: Admin manages user accounts, including activating, deactivating, and updating user information.

**Actors**: Admin

**Preconditions**: Admin is logged in.

**Steps**:

1.  Admin navigates to the "Users" section from the sidebar menu.
2.  Admin sees a list of all users with options to view, edit, or deactivate accounts.
3.  To view user details:
    -   Admin clicks on a user.
    -   User details page shows personal information and account activity.
4.  To edit user information:
    -   Admin clicks "Edit" next to the user.
    -   Admin updates user details.
    -   Admin clicks "Save".
    -   System updates the user information.
5.  To deactivate a user:
    -   Admin clicks "Deactivate" next to the user.
    -   Admin confirms the deactivation.
    -   System deactivates the user account.

#### Use Case 6: Manage Payments

**Description**: Admin manages and tracks payments.

**Actors**: Admin

**Preconditions**: Admin is logged in.

**Steps**:

1.  Admin navigates to the "Payments" section from the sidebar menu.
2.  Admin sees a list of all payments with details like payment ID, user, amount, method, and status.
3.  To view payment details:
    -   Admin clicks on a payment.
    -   Payment details page shows transaction information.
4.  To update payment status:
    -   Admin selects a new status (e.g., completed, failed).
    -   Admin clicks "Update Status".
    -   System updates the payment status.

#### Use Case 7: Address User Concerns

**Description**: Admin addresses user concerns and support tickets.

**Actors**: Admin

**Preconditions**: Admin is logged in.

**Steps**:

1.  Admin navigates to the "Support Tickets" section from the sidebar menu.
2.  Admin sees a list of all support tickets with details like ticket ID, user, subject, status.
3.  To view ticket details:
    -   Admin clicks on a ticket.
    -   Ticket details page shows user concern and communication history.
4.  To respond to a ticket:
    -   Admin types a response in the text box.
    -   Admin clicks "Send Response".
    -   System sends the response to the user.
5.  To close a ticket:
    -   Admin changes the status to "Closed".
    -   Admin clicks "Update Status".
    -   System updates the ticket status.

#### Use Case 8: View Activity Logs

**Description**: Admin views activity logs to track all actions performed by users and admins for auditing and security purposes.

**Actors**: Admin

**Preconditions**: Admin is logged in.

**Steps**:

1.  Admin navigates to the "Activity Logs" section from the sidebar menu.
2.  Admin sees a list of all activities with details like action, actor, date, and description.
3.  To filter logs:
    -   Admin selects filters (e.g., date range, action type).
    -   System filters the logs based on selected criteria.
4.  To view log details:
    -   Admin clicks on a log entry.
    -   Log details page shows the full description of the action.

#### Use Case 9: Generate Reports

**Description**: Admin generates and views various reports to make informed decisions.

**Actors**: Admin

**Preconditions**: Admin is logged in.

**Steps**:

1.  Admin navigates to the "Reports" section from the sidebar menu.
2.  Admin selects the type of report to generate (e.g., sales report, user activity report).
3.  Admin selects filters (e.g., date range, user type).
4.  Admin clicks "Generate Report".
5.  System generates and displays the report.
6.  Admin can download the report as a PDF or CSV file.

#### Use Case 10: Configure Settings

**Description**: Admin configures application settings to operate according to the organization's requirements.

**Actors**: Admin

**Preconditions**: Admin is logged in.

**Steps**:

1.  Admin navigates to the "Settings" section from the sidebar menu.
2.  Admin sees different settings categories (e.g., General, Notifications, Security).
3.  Admin selects a category to update.
4.  Admin updates settings as needed.
5.  Admin clicks "Save".
6.  System updates and applies the settings.

#### Use Case 11: Real-time Notifications

**Description**: Admin receives and manages real-time notifications.

**Actors**: Admin

**Preconditions**: Admin is logged in.

**Steps**:

1.  Admin logs in and sees a notification bell icon in the top navbar.
2.  When a new notification arrives, the bell icon shows a badge with the number of new notifications.
3.  Admin clicks the bell icon to view the notifications dropdown.
4.  Notifications are listed with the most recent ones at the top.
5.  Admin clicks on a notification to view details or take action.
6.  Notifications can be marked as read/unread or deleted.



### User Use Cases 

#### Use Case 1: Safe Login

**Description**: User logs in securely to access their account.

**Actors**: User

**Preconditions**: User has a registered account.

**Steps**:

1.  User navigates to the login page.
2.  User enters their email and password.
3.  User clicks the "Login" button.
4.  System verifies the credentials.
5.  If credentials are correct, user is redirected to the home page.
6.  If credentials are incorrect, an error message is displayed.

**Extensions**:

-   **Login with Google/GitHub**:
    1.  User clicks the "Login with Google" or "Login with GitHub" button.
    2.  User is redirected to the Google/GitHub authentication page.
    3.  User logs in with their Google/GitHub account.
    4.  System verifies the Google/GitHub credentials.
    5.  If credentials are correct, user is redirected to the home page.
    6.  If credentials are incorrect, an error message is displayed.

#### Use Case 2: Safe Registration

**Description**: New user registers securely to create an account.

**Actors**: New User

**Preconditions**: User does not have an existing account.

**Steps**:

1.  New user navigates to the registration page.
2.  New user enters their personal details (name, email, password, etc.).
3.  New user clicks the "Register" button.
4.  System creates a new account and sends a verification email with an OTP.
5.  New user receives the verification email and enters the OTP on the verification page.
6.  System verifies the OTP.
7.  If OTP is correct, user account is verified.
8.  If OTP is incorrect, an error message is displayed.

**Extensions**:

-   **Register with Google/GitHub**:
    1.  New user clicks the "Register with Google" or "Register with GitHub" button.
    2.  User is redirected to the Google/GitHub authentication page.
    3.  User logs in with their Google/GitHub account.
    4.  System creates a new account using Google/GitHub details and sends a verification email with an OTP.
    5.  User verifies their account as described above.

#### Use Case 3: Build Profile Details

**Description**: New user completes their profile details using a stepper.

**Actors**: New User

**Preconditions**: User has a verified account.

**Steps**:

1.  New user logs in and is prompted to complete their profile.
2.  User navigates through the stepper to input additional information (address, contact details, etc.).
3.  User clicks "Next" to proceed through each step.
4.  User clicks "Finish" to complete the profile setup.
5.  System saves the profile details.

#### Use Case 4: Browse Books

**Description**: User browses a list of available secondhand books.

**Actors**: User

**Preconditions**: User is on the home page or books listing page.

**Steps**:

1.  User navigates to the books listing page.
2.  User sees a list of available books.
3.  User uses filters (category, genre, author, price) to refine the search.
4.  User clicks on a book to view its details.

#### Use Case 5: View Book Details

**Description**: User views detailed information about a book.

**Actors**: User

**Preconditions**: User is browsing books.

**Steps**:

1.  User clicks on a book from the listing.
2.  System displays the book details page.
3.  User views information such as description, price, condition, and seller information.

#### Use Case 6: Add to Cart

**Description**: User adds books to their cart.

**Actors**: User

**Preconditions**: User is viewing a book's details.

**Steps**:

1.  User clicks the "Add to Cart" button on the book details page.
2.  System adds the book to the user's cart.
3.  User sees a confirmation message that the book has been added to the cart.

#### Use Case 7: Manage Cart

**Description**: User views and manages the items in their cart.

**Actors**: User

**Preconditions**: User has items in their cart.

**Steps**:

1.  User navigates to the cart page.
2.  System displays the items in the user's cart.
3.  User updates quantities or removes items as needed.
4.  User clicks "Update Cart" to save changes.

#### Use Case 8: Place Order

**Description**: User places an order for books in their cart.

**Actors**: User

**Preconditions**: User has items in their cart and a verified email.

**Steps**:

1.  User navigates to the cart page.
2.  User clicks "Proceed to Checkout".
3.  System verifies if the user's email is verified.
4.  If email is verified:
    -   User enters payment and shipping information.
    -   User clicks "Place Order".
    -   System processes the order and displays an order confirmation.
5.  If email is not verified:
    -   System prompts user to verify their email before placing the order.

#### Use Case 9: Order Confirmation

**Description**: User receives an order confirmation notification.

**Actors**: User

**Preconditions**: User has placed an order.

**Steps**:

1.  System sends an order confirmation notification to the user.
2.  User receives the notification via email and in-app notifications.
3.  User can view the order details and status.

#### Use Case 10: Track Order Status

**Description**: User tracks the status of their orders.

**Actors**: User

**Preconditions**: User has placed an order.

**Steps**:

1.  User navigates to the "Order History" page.
2.  System displays the list of user’s orders with statuses (to pay, to ship, to receive, to review).
3.  User clicks on an order to view its details and current status.

#### Use Case 11: Request Returns and Cancellations

**Description**: User requests a return or cancellation of an order.

**Actors**: User

**Preconditions**: User has placed an order.

**Steps**:

1.  User navigates to the "Order History" page.
2.  User selects an order to return or cancel.
3.  User clicks "Request Return" or "Request Cancellation".
4.  User provides a reason for the return or cancellation.
5.  User submits the request.
6.  System processes the request and updates the order status.

#### Use Case 12: Sell Books

**Description**: User lists their secondhand books for sale.

**Actors**: User

**Preconditions**: User is logged in.

**Steps**:

1.  User navigates to the "Sell" section.
2.  User enters book details (title, description, price, etc.).
3.  User clicks "List Book".
4.  System adds the book to the marketplace.
5.  User receives a notification confirming the listing.

#### Use Case 13: Manage Listings

**Description**: User manages their book listings.

**Actors**: User

**Preconditions**: User has listed books for sale.

**Steps**:

1.  User navigates to the "My Listings" page.
2.  System displays the user's listed books.
3.  User clicks "Edit" to update book details.
4.  User clicks "Remove" to delete the listing.
5.  System updates the listings accordingly.

#### Use Case 14: Wishlist Management

**Description**: User adds and manages books in their wishlist.

**Actors**: User

**Preconditions**: User is logged in.

**Steps**:

1.  User navigates to the book details page.
2.  User clicks "Add to Wishlist".
3.  System adds the book to the user's wishlist.
4.  User navigates to the "Wishlist" page to view and manage wishlist items.
5.  User can move books from wishlist to cart when ready to purchase.

#### Use Case 15: Receive Notifications

**Description**: User receives real-time notifications about order status, messages, and updates.

**Actors**: User

**Preconditions**: User is logged in.

**Steps**:

1.  System sends notifications to the user.
2.  User sees a notification bell icon with a badge indicating new notifications.
3.  User clicks the bell icon to view notifications.
4.  User clicks on a notification to view details or take action.

#### Use Case 16: Manage Account Settings

**Description**: User updates their account settings.

**Actors**: User

**Preconditions**: User is logged in.

**Steps**:

1.  User navigates to the "Account Settings" page.
2.  User updates settings such as personal information, notification preferences, and security options.
3.  User clicks "Save" to apply changes.
4.  System updates the user's account settings.

#### Use Case 17: Reset Password

**Description**: User resets their password if they forget it.

**Actors**: User

**Preconditions**: User is on the login page.

**Steps**:

1.  User clicks "Forgot Password".
2.  User enters their registered email address.
3.  System sends a password reset link to the user's email.
4.  User clicks the link and is redirected to the reset password page.
5.  User enters a new password and confirms it.
6.  User clicks "Reset Password".
7.  System updates the user's password.

#### Use Case 18: Contact Support

**Description**: User contacts support for assistance.

**Actors**: User

**Preconditions**: User is logged in.

**Steps**:

1.  User navigates to the "Support" page.
2.  User submits a support ticket with their issue or question.
3.  System sends a confirmation that the ticket has been received.
4.  User views support ticket history to track the progress of their inquiries.
5.  Admin responds to the ticket and resolves the issue.

#### Use Case 19: Leave Reviews and Ratings

**Description**: User leaves reviews and ratings for books they have purchased.

**Actors**: User

**Preconditions**: User has purchased a book.

**Steps**:

1.  User navigates to the "Order History" page.
2.  User selects a completed order.
3.  User clicks "Leave a Review".
4.  User rates the book and writes a review.
5.  User submits the review.
6.  System adds the review to the book's details page.


## Site Map

### Admin Site Map

#### Dashboard
- Overview
  - Total Sales
  - Total Users
  - Total Orders
- Charts and Analytics
  - Sales Trends (Daily/Weekly/Monthly)
  - Top-Selling Books
- Recent Activities
  - Recent Orders
  - Recent User Signups

#### Books
- List of Books
  - View Book Details
  - Add New Book
  - Edit Book
  - Delete Book

#### Orders
- List of Orders
  - View Order Details
  - Update Order Status

#### Users
- List of Users
  - View User Details
  - Edit User Information
  - Deactivate User

#### Payments
- List of Payments
  - View Payment Details
  - Update Payment Status

#### Support Tickets
- List of Support Tickets
  - View Ticket Details
  - Respond to Ticket
  - Close Ticket

#### Activity Logs
- List of Activity Logs
  - View Log Details
  - Filter Logs

#### Reports
- Generate Reports
  - Sales Report
  - User Activity Report
- View Reports
  - Download Reports (PDF/CSV)

#### Settings
- General Settings
- Notification Settings
- Security Settings

#### Notifications
- View Real-time Notifications
- Mark Notifications as Read/Unread
- Delete Notifications

#### Profile
- View Profile
- Edit Profile
  - Change Email
  - Change Password



###  User Site Map 

#### Home
- Featured Books
- Categories

#### Books
- List of Books
  - Book Details
    - Add to Cart
    - Add to Wishlist

#### Cart
- View Cart
  - Update Quantities
  - Remove Items
  - Proceed to Checkout

#### Checkout
- Enter Payment Information
- Enter Shipping Information
- Place Order

#### Orders
- Order History
  - Order Details
    - Track Order Status (To Pay, To Ship, To Receive, To Review)
    - Request Return
    - Request Cancellation

#### Wishlist
- View Wishlist
  - Move to Cart
  - Remove from Wishlist

#### Sell
- List a Book
  - Enter Book Details
  - Submit Listing
- My Listings
  - View Listed Books
  - Edit Listing
  - Remove Listing

#### Profile
- View Profile
  - Edit Profile
    - Change Email
    - Change Password
    - Update Personal Details

#### Settings
- Account Settings
  - Personal Information
  - Notification Preferences
  - Security Settings (Enable Two-Factor Authentication)

#### Notifications
- View Real-time Notifications
  - Mark as Read/Unread
  - Delete Notification

#### Support
- Contact Support
  - Submit Support Ticket
  - View Support Ticket History

#### Reviews
- Leave a Review
- View Reviews and Ratings

#### Authentication
- Login
  - Login with Email and Password
  - Login with Google
  - Login with GitHub
  - Forgot Password
    - Enter Email
    - Verify OTP
    - Reset Password
- Registration
  - Register with Email and Password
  - Register with Google
  - Register with GitHub
  - Verify Email (OTP)
  - Complete Profile (Stepper)

#### Static Pages
- About Us
- Terms of Service
- Privacy Policy
- Contact Us



