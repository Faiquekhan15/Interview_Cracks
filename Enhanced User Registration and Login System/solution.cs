using System;
using System.Collections.Generic;
using System.Linq;

interface IUser
{
    string Username { get; set; }
    string Email { get; set; }
    string Password { get; set; }
    int IncorrectAttempt { get; set; }
}

class User : IUser
{
    public string Username { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public int IncorrectAttempt { get; set; }
}

interface IApplication
{
    string Register(IUser user);
    string Login(IUser user);
    string Logout(IUser user);
}

class Application : IApplication
{
    private List<IUser> RegisteredUsers = new List<IUser>();
    private List<IUser> UsersLoggedIn = new List<IUser>();

    public string Register(IUser user)
    {
        if (!IsUserRegistered(user))
        {
            RegisteredUsers.Add(user);
            user.IncorrectAttempt = 0;
            return "Registration successful.";
        }
        else
        {
            return "User is already registered.";
        }
    }

    public string Login(IUser user)
    {
        if (IsUserRegistered(user))
        {
            if (user.IncorrectAttempt < 3)
            {
                if (!IsUserLoggedIn(user))
                {
                    if (VerifyPassword(user.Password))
                    {
                        UsersLoggedIn.Add(user);
                        user.IncorrectAttempt = 0;
                        return "Login successful.";
                    }
                    else
                    {
                        user.IncorrectAttempt++;
                        return "Incorrect password. You have " + (3 - user.IncorrectAttempt) + " attempt(s) left.";
                    }
                }
                else
                {
                    return "User is already logged in.";
                }
            }
            else
            {
                return "Too many failed attempts. Account locked.";
            }
        }
        else
        {
            return "User is not registered. Please register first.";
        }
    }

    public string Logout(IUser user)
    {
        if (IsUserLoggedIn(user))
        {
            UsersLoggedIn.Remove(user);
            return "Logout successful.";
        }
        else
        {
            return "User is not logged in.";
        }
    }

    private bool IsUserRegistered(IUser user)
    {
        return RegisteredUsers.Any(registeredUser => user.Email == registeredUser.Email);
    }

    private bool IsUserLoggedIn(IUser user)
    {
        return UsersLoggedIn.Contains(user);
    }

    static bool VerifyPassword(string password)
    {
        if (password.Length < 8)
            return false;

        if (!password.Any(char.IsLower))
            return false;

        if (!password.Any(char.IsUpper))
            return false;

        if (!password.Any(char.IsDigit))
            return false;

        if (!password.Any(ch => !char.IsLetterOrDigit(ch)))
            return false;

        return true;
    }
}

class Program
{
    static void Main(string[] args)
    {
        Application app = new Application();

        IUser user1 = new User { Username = "Alice", Email = "alice@example.com", Password = "P@ssw0rd", IncorrectAttempt = 0 };
        IUser user2 = new User { Username = "Bob", Email = "bob@example.com", Password = "12345", IncorrectAttempt = 0 };

        Console.WriteLine(app.Register(user1)); // Output: Registration successful.
        Console.WriteLine(app.Register(user2)); // Output: Registration successful.

        Console.WriteLine(app.Login(user1)); // Output: Login successful.
        Console.WriteLine(app.Login(user2)); // Output: Incorrect password. You have 2 attempt(s) left.
        Console.WriteLine(app.Login(user2)); // Output: Incorrect password. You have 1 attempt(s) left.
        Console.WriteLine(app.Login(user2)); // Output: Too many failed attempts. Account locked.

        Console.WriteLine(app.Logout(user1)); // Output: Logout successful.
        Console.WriteLine(app.Logout(user1)); // Output: User is not logged in.
    }
}
