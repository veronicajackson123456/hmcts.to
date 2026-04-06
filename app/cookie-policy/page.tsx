import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Cookie Policy</h1>
          <p className="text-lg text-gray-600 mb-12">Version 1.0 - Last Updated: 2025</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              This Cookie Policy ("Policy") explains how HMCTS LLC - Hospitality Management Consultancy & Technology Solutions (the "Company", "we", "us", "our", and "HMCTS") uses cookies and similar tracking technologies on our website located at hospitalitysoftwaresolutions.com (the "Site"). By accessing or using the Site, you agree to our use of cookies as described in this Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Are Cookies?</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. Cookies help websites recognize your device and remember information about your preferences or previous interactions. They are widely used to make websites function more efficiently and to provide information to the website owners.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Types of Cookies We Use</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Essential Cookies</strong> – These cookies are necessary for the Site to function properly. They enable you to navigate the Site and use its features. Without these cookies, services you have asked for cannot be provided.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Performance Cookies</strong> – These cookies collect information about how you use the Site, such as which pages you visit, how long you stay on each page, and whether you encounter any errors. This information helps us improve the performance and user experience of the Site.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Analytics Cookies</strong> – We use analytics cookies to understand how visitors interact with the Site. These cookies track information such as your IP address, browser type, pages visited, and time spent on pages. This data is aggregated and does not identify you personally.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Functional Cookies</strong> – These cookies remember your preferences and choices to provide a personalized experience. For example, they may remember your language preference or login information.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Advertising Cookies</strong> – We may use advertising cookies to deliver targeted advertisements based on your interests and browsing behavior. These cookies may be set by us or by third-party advertising partners.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Third-Party Cookies</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We may allow third-party service providers, such as analytics providers and advertising partners, to place cookies on your device. These third parties may use their cookies to track your browsing behavior across multiple websites. Third-party providers have their own privacy policies governing their use of cookies.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How We Use Cookies</h2>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">To enable the proper functioning of the Site and its features</li>
              <li className="leading-relaxed">To remember your preferences and settings</li>
              <li className="leading-relaxed">To analyze how visitors use the Site and improve its performance</li>
              <li className="leading-relaxed">To provide you with targeted advertisements and marketing content</li>
              <li className="leading-relaxed">To detect and prevent fraud or security threats</li>
              <li className="leading-relaxed">To comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Your Cookie Choices</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Browser Settings</strong> – You can control cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when a cookie is being sent. However, blocking certain cookies may affect the functionality of the Site.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Opting Out</strong> – You may opt out of certain cookies by adjusting your preferences in our cookie consent manager, which you can access when you first visit the Site or at any time by clicking the cookie preference link in the footer.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Do Not Track</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Some browsers include a "Do Not Track" feature. Because there is no industry standard for recognizing "Do Not Track" signals, the Site currently does not respond to "Do Not Track" browser signals. However, you may opt out of cookies as described above.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Duration of Cookies</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Some cookies expire when you close your browser (session cookies), while others remain on your device for a specified period or until you manually delete them (persistent cookies). The duration of each cookie depends on its purpose and settings.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">International Data Transfers</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              If you are accessing the Site from outside the United States, please note that cookies and other tracking technologies may result in the transfer of your personal information to the United States or other countries. By using the Site, you consent to such transfers.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Contact Us</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about this Cookie Policy, please contact us at:
            </p>

            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Email:</strong> info@hospitalitysoftwaresolutions.com
            </p>

            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Phone:</strong> +1 (845) 904-7626
            </p>

            <p className="text-gray-700 leading-relaxed">
              <strong>Address:</strong> 30 N GOULD STREET SHERIDAN, WYOMING 82801 USA
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Changes to This Policy</h2>

            <p className="text-gray-700 leading-relaxed">
              We may update this Cookie Policy from time to time. Your continued use of the Site following the posting of changes means you accept such changes.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
