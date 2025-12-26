import React, { useState, useRef } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    serviceType: '', // Renamed from eventType
    date: '', // Renamed from eventDate
    location: '',
    contact: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Hi Skip Media Hub, I'm interested in your video editing services.

📝 Details:
• Name: ${formData.name}
• Service Type: ${formData.serviceType}
• Preferred Date: ${formData.date}
• Location: ${formData.location}
• Contact: ${formData.contact}

💬 Message: ${formData.message}

Please share more details and package options. Thank you!`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/6382958407?text=${encodedMessage}`, '_blank');

    // Reset form and close modal
    setFormData({
      name: '',
      serviceType: '',
      date: '',
      location: '',
      contact: '',
      message: ''
    });
    setIsOpen(false);
  };

  const quickWhatsApp = () => {
    const message = encodeURIComponent("Hi Skip Media Hub, I'm interested in your video editing services. Please share more details.");
    window.open(`https://wa.me/6382958407?text=${message}`, '_blank');
  };

  const handleBookNow = () => {
    // Audio removed as per request
    // Open the booking modal
    setIsOpen(true);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="flex flex-col items-end space-y-3">
          {/* Quick chat button */}
          <Button
            onClick={quickWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            size="sm"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <MessageCircle className="w-5 h-5" />
          </Button>

          {/* Detailed form button */}
          <Button
            onClick={handleBookNow}
            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105 text-sm"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Book Now
          </Button>
        </div>
      </div>

      {/* Booking Form Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md bg-black border-gray-800">
          <VisuallyHidden>
            <DialogTitle>Book Video Editing Service via WhatsApp</DialogTitle>
            <DialogDescription>
              Fill out the form below to send your details directly to Skip Media Hub via WhatsApp
            </DialogDescription>
          </VisuallyHidden>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="bg-green-500 p-2 rounded-full mr-3">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Book via WhatsApp</h3>
                <p className="text-white/70 text-sm">Fill details for quick inquiry</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white/80 text-sm mb-2">Full Name *</label>
              <Input
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="bg-gray-900 border-gray-700 text-white focus:border-primary focus:ring-primary"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block text-white/80 text-sm mb-2">Service Type *</label>
              <Select onValueChange={(value) => handleInputChange('serviceType', value)} required>
                <SelectTrigger className="bg-gray-900 border-gray-700 text-white focus:border-primary focus:ring-primary">
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  <SelectItem value="video-editing">Video Editing Service</SelectItem>
                  <SelectItem value="reels-shorts">Reels / Shorts</SelectItem>
                  <SelectItem value="motion-graphics">Motion Graphics</SelectItem>
                  <SelectItem value="full-production">Full Video Production</SelectItem>
                  <SelectItem value="content-writing">Content Writing</SelectItem>
                  <SelectItem value="brand-strategy">Brand Strategy</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-white/80 text-sm mb-2">Preferred Date</label>
              <Input
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                className="bg-gray-900 border-gray-700 text-white focus:border-primary focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-white/80 text-sm mb-2">Location</label>
              <Select onValueChange={(value) => handleInputChange('location', value)}>
                <SelectTrigger className="bg-gray-900 border-gray-700 text-white focus:border-primary focus:ring-primary">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  <SelectItem value="vellore">Vellore</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                  <SelectItem value="remote">Remote / Online</SelectItem>
                  <SelectItem value="other">Other Location</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-white/80 text-sm mb-2">Contact Number *</label>
              <Input
                value={formData.contact}
                onChange={(e) => handleInputChange('contact', e.target.value)}
                className="bg-gray-900 border-gray-700 text-white focus:border-primary focus:ring-primary"
                placeholder="Enter your contact number"
                required
              />
            </div>

            <div>
              <label className="block text-white/80 text-sm mb-2">Additional Message</label>
              <Textarea
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className="bg-gray-900 border-gray-700 text-white resize-none focus:border-primary focus:ring-primary"
                placeholder="Any specific requirements or questions..."
                rows={3}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Send className="w-4 h-4 mr-2" />
              Send to WhatsApp
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WhatsAppFloat;
