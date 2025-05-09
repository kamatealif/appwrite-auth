# Appwrite Authentication Service

A robust authentication service built with Appwrite, providing secure user management and authentication features.

## Features

- User Registration
- User Login
- Session Management
- Current User Information
- Logout Functionality

## Prerequisites

- Node.js (v14 or higher)
- Appwrite Account
- Appwrite Project

## Installation

1. Clone the repository
```bash
git clone https://github.com/kamatealif/appwrite-auth.git
cd appwrite-auth
```

2. Install dependencies
```bash
npm install
```

3. Configure Environment Variables
- Create an Appwrite account at [appwrite.io](https://appwrite.io)
- Create a new project
- Copy `.env.sample` to `.env`
- Update the configuration in `.env`:
```
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your-project-id
```

The configuration will be automatically loaded by the application.

## Usage

### Initialize AuthService
```javascript
import authService from './appwrite-auth/auth.js'
```

### User Registration
```javascript
try {
    const user = await authService.createAccount({
        email: 'user@example.com',
        password: 'securepassword123',
        name: 'John Doe'
    });
    console.log('User created:', user);
} catch (error) {
    console.error('Registration error:', error);
}
```

### User Login
```javascript
try {
    const session = await authService.loginAccount({
        email: 'user@example.com',
        password: 'securepassword123'
    });
    console.log('Login successful:', session);
} catch (error) {
    console.error('Login error:', error);
}
```

### Get Current User
```javascript
try {
    const currentUser = await authService.getCurrentAccount();
    console.log('Current user:', currentUser);
} catch (error) {
    console.error('Error getting current user:', error);
}
```

### Logout
```javascript
try {
    await authService.logout();
    console.log('Logged out successfully');
} catch (error) {
    console.error('Logout error:', error);
}
```

## Error Handling

The service implements proper error handling for all operations. Any API errors are caught and re-thrown, allowing the calling code to handle them appropriately.

## Security Considerations

- Passwords are never stored in plain text
- All communication with Appwrite is over HTTPS
- Sessions are managed securely
- Input validation is handled by Appwrite's built-in security features

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- Built with [Appwrite](https://appwrite.io)
- Inspired by modern authentication best practices

## Support

For support, please:
1. Check the [Appwrite Documentation](https://appwrite.io/docs)
2. Open an issue in this repository
3. Contact the maintainers directly

## Version History

- 1.0.0
  - Initial release
  - Basic authentication features implemented
  - Session management added

## TODO

- Add password reset functionality
- Implement social authentication
- Add user profile management
- Add email verification
- Implement rate limiting
- Add more comprehensive error handling
- Add unit tests

## Authors

- [kamatealif](https://github.com/kamatealif)

## Contact

- Email: alipkamate@gmail.com
- GitHub: https://github.com/kamatealif
- Twitter: @alipkamate

## About Appwrite

Appwrite is an open-source backend server that helps you build native iOS, Android, and Web applications much faster with realtime APIs for authentication, databases, files storage, cloud functions, and much more!


