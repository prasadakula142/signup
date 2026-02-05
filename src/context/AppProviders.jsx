import { AuthProvider } from "./AuthContext";
import { BookingProvider } from "./BookingContext";
import { ThemeProvider } from "./ThemeContext";
import { NotificationProvider } from "./NotificationContext";

export const AppProviders = ({ children }) => (
  <AuthProvider>
    <ThemeProvider>
      <NotificationProvider>
        <BookingProvider>{children}</BookingProvider>
      </NotificationProvider>
    </ThemeProvider>
  </AuthProvider>
);
