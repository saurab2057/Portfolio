import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const [status, setStatus] = useState('');

  const sendEmail = (data: any) => {
    // Map data to the correct placeholders
    const emailData = {
      to_name: 'saurabkhatiwoda@gmail.com',  // Or dynamically set this if needed
      from_name: data.user_name,
      message: data.message,
    };
  
    setStatus('sending');
  
    emailjs
      .send(
        'service_9zyabam',
        'template_vjagmss',
        emailData,
        'B6mHCLPFMpbMU9BUB'
      )
      .then(
        () => {
          setStatus('success');
          reset();
        },
        (error) => {
          console.error('Error sending email:', error);  // Log error
          setStatus('error');
        }
      );
  };
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form
              onSubmit={handleSubmit(sendEmail)}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  {...register('user_name', { required: true })}
                  type="text"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  {...register('user_email', { required: true })}
                  type="email"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  {...register('message', { required: true })}
                  rows={4}
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p className="text-green-500">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-500">Failed to send message. Please try again.</p>
              )}
            </form>

            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-red-600 mr-2" />
                <a href="mailto:saurabkhatiwoda@gmail.com" className="text-gray-300 hover:text-red-600">
                  saurabkhatiwoda@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-red-600 mr-2" />
                <a href="tel:9807601257" className="text-gray-300 hover:text-red-600">
                  +977 9807601257
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-red-600 mr-2" />
                <span className="text-gray-300">Kathmandu, Nepal</span>
              </div>
            </div>
          </div>

          <div className="h-[400px] rounded-lg overflow-hidden">
            <MapContainer
              center={[27.7172, 85.3240]}
              zoom={13}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[27.7172, 85.3240]}>
                <Popup>
                  Saurab Khatiwoda <br /> Kathmandu, Nepal
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;