import React from 'react';

const FAQSection = () => (
  <div className="my-8">
    <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
    <div className="space-y-4">
      <div>
        <p className="font-semibold">Q: How do I join a match?</p>
        <p>A: Register, select a match, and complete payment via Razorpay.</p>
      </div>
      <div>
        <p className="font-semibold">Q: When is the room ID revealed?</p>
        <p>A: 1 hour before the match start time, only for joined players.</p>
      </div>
      <div>
        <p className="font-semibold">Q: How are prizes distributed?</p>
        <p>A: Via UPI after the match, based on performance.</p>
      </div>
    </div>
  </div>
);

export default FAQSection;
