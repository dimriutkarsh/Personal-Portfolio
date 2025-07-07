# Flask Portfolio Website

A beautiful, responsive portfolio website built with Flask, featuring modern design, animations, and AI-powered elements.

## Features

- **Responsive Design**: Works perfectly on all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **AI-Powered Elements**: Interactive globe animation and smart layouts
- **Contact Form**: Functional contact form with Flask backend
- **Project Showcase**: Dynamic project filtering and display
- **Skills Section**: Interactive skill progress bars
- **Accessibility**: WCAG compliant with keyboard navigation support
- **Performance Optimized**: Fast loading with optimized assets

## Project Structure

```
flask_portfolio/
├── main.py                 # Flask application
├── templates/              # Jinja2 templates
│   ├── base.html          # Base template
│   ├── index.html         # Home page
│   ├── about.html         # About page
│   ├── skills.html        # Skills page
│   ├── projects.html      # Projects page
│   └── contact.html       # Contact page
├── static/                # Static assets
│   ├── css/               # Stylesheets
│   │   ├── index.css      # Home page styles
│   │   └── style.css      # General styles
│   └── js/                # JavaScript files
│       ├── index.js       # Home page scripts
│       └── script.js      # General scripts
├── requirements.txt       # Python dependencies
└── README.md             # This file
```

## Installation

1. **Clone or download the project files**

2. **Install Python dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the Flask application**:
   ```bash
   python main.py
   ```

4. **Access the website**:
   Open your browser and navigate to `http://localhost:5000`

## Customization

### Updating Content

#### Personal Information
Edit the templates in the `templates/` folder to update:
- Name and title in `base.html`
- About section content in `about.html`
- Contact information in `contact.html`

#### Skills and Projects
Update the data in `static/js/script.js`:
- `skillsData` array for skills
- `learningGoalsData` array for learning goals
- `projectsData` array for projects

#### Styling
Modify the CSS files in `static/css/`:
- `style.css` for general styling
- `index.css` for home page specific styles

### Adding New Pages

1. Create a new HTML template in `templates/`
2. Add a route in `main.py`
3. Update navigation in `base.html`

## Key Features Explained

### Responsive Design
- Mobile-first approach
- Breakpoints: 320px, 481px, 768px, 1024px, 1440px+
- Touch-friendly interactions for mobile devices

### Performance Optimizations
- Lazy loading for images
- Throttled scroll and resize event handlers
- Intersection Observer for animations
- Optimized CSS and JavaScript

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- Color contrast compliance

### Contact Form
The contact form submits to the Flask backend and includes:
- Form validation
- Loading states
- Success/error notifications
- CSRF protection ready

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Development

### Adding New Features

1. **Frontend**: Update HTML templates, CSS, and JavaScript
2. **Backend**: Add new routes in `main.py`
3. **Styling**: Use the existing CSS variable system for consistency

### Environment Variables

For production, consider adding:
- `SECRET_KEY` for Flask sessions
- Database configuration
- Email service configuration for contact form

## Deployment

### Local Development
```bash
python main.py
```

### Production Deployment
Consider using:
- **Heroku**: Add `Procfile` and update requirements
- **Digital Ocean**: Use App Platform or Droplets
- **Vercel**: Flask deployment with serverless functions
- **PythonAnywhere**: Simple Flask hosting

## License

This project is open source and available under the MIT License.

## Credits

- **Design**: Modern, clean aesthetic inspired by top portfolio websites
- **Icons**: Emoji icons for cross-platform compatibility
- **Images**: Sample images from Pexels (replace with your own)
- **Fonts**: Inter font family from Google Fonts

## Support

For issues or questions:
1. Check the browser console for JavaScript errors
2. Verify all file paths are correct
3. Ensure Flask dependencies are installed
4. Check that the Flask server is running on the correct port

Enjoy your new portfolio website! 🚀