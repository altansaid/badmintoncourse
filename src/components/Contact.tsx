const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact{" "}
            <span className="text-primary">Information</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about the Fly Birdie program? Here's how you can reach us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 animate-slide-up">
            {/* Email Info */}
            <div className="gradient-card p-8 rounded-2xl shadow-custom">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-2xl">📧</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg mb-2">Email Us</h4>
                  <a
                    href="mailto:flybirdies.ottawa@gmail.com"
                    className="text-primary font-medium hover:underline"
                  >
                    flybirdies.ottawa@gmail.com
                  </a>
                  <p className="text-muted-foreground text-sm mt-1">We'll respond as soon as possible</p>
                </div>
              </div>
            </div>

            {/* Location Info */}
            <div className="gradient-card p-8 rounded-2xl shadow-custom">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-2xl">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg mb-2">Training Location</h4>
                  <p className="text-foreground font-medium">
                    South March Public School (Kanata)
                  </p>
                  <p className="text-muted-foreground">
                    Indoor training facility
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center animate-slide-up">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
              <span className="text-xl">💡</span>
              <span className="text-foreground font-medium">
                Your support and cooperation are greatly appreciated!
              </span>
              <span className="text-xl">🙌</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
