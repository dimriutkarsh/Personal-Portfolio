from flask import Flask, render_template, request, jsonify
import os

app = Flask(__name__)

# Configuration
app.config['SECRET_KEY'] = 'your-secret-key-here'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/skills')
def skills():
    return render_template('skills.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/contact', methods=['POST'])
def contact_form():
    if request.method == 'POST':
        # Handle form submission
        first_name = request.form.get('firstName')
        last_name = request.form.get('lastName')
        email = request.form.get('email')
        subject = request.form.get('subject')
        message = request.form.get('message')
        newsletter = request.form.get('newsletter')
        
        # Here you would typically save to database or send email
        # For now, we'll just return a success response
        
        return jsonify({
            'status': 'success',
            'message': 'Thank you for your message! I\'ll get back to you soon.'
        })
    
    return render_template('contact.html')

@app.errorhandler(404)
def not_found_error(error):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_error(error):
    return render_template('500.html'), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)