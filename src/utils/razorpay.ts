// Razorpay utility functions
export const loadRazorpay = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    
    script.onload = () => {
      resolve(true);
    };
    
    script.onerror = () => {
      resolve(false);
    };
    
    document.body.appendChild(script);
  });
};

export const formatAmount = (amount: number): number => amount * 100;

declare global {
  interface Window {
    Razorpay: any;
  }
}