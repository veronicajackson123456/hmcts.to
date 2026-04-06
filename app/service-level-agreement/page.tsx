import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SLAPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Service Level Agreement</h1>
          <p className="text-lg text-gray-600 mb-12">Version 1.0 - Last Updated: 2025</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              This Service Level Agreement ("SLA") is entered into by and between HMCTS LLC - Hospitality Management Consultancy & Technology Solutions (the "Company", "Provider", "we", "us", "our", and "HMCTS") and you (the "Client", "Customer", or "you"). This SLA outlines the service standards and commitments the Company makes to its clients.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Service Availability</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>1.1 Uptime Guarantee</strong> – The Company commits to maintaining a service availability of 99.5% per calendar month, measured as the percentage of time the services are operational and accessible to clients.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>1.2 Scheduled Maintenance</strong> – The Company may perform scheduled maintenance during designated maintenance windows. Scheduled maintenance is not counted against the uptime guarantee, provided the Company provides advance notice (typically 48 hours) to clients.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>1.3 Exclusions</strong> – The uptime guarantee does not apply to outages caused by circumstances beyond the Company's control, including but not limited to force majeure events, client misuse, third-party services, or client-side issues.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Service Support</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>2.1 Support Hours</strong> – The Company provides technical support during business hours: Monday through Friday, 9:00 AM to 6:00 PM Eastern Time. Emergency support may be available outside business hours for critical issues.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>2.2 Response Time Commitments</strong>
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">Critical Issues: Response within 2 hours</li>
              <li className="leading-relaxed">High Priority Issues: Response within 4 hours</li>
              <li className="leading-relaxed">Medium Priority Issues: Response within 8 business hours</li>
              <li className="leading-relaxed">Low Priority Issues: Response within 24 business hours</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>2.3 Contact Methods</strong> – Clients can reach support via email (info@hospitalitysoftwaresolutions.com) or phone (+1 (845) 904-7626). Support requests should include a clear description of the issue and steps to reproduce the problem.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Performance Standards</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>3.1 Response Time</strong> – The Company commits to responding to support requests within the timeframes specified in Section 2.2.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>3.2 Resolution Time</strong> – The Company will make reasonable efforts to resolve issues within the following timeframes, although actual resolution may take longer depending on the complexity of the issue:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">Critical Issues: 4-8 hours</li>
              <li className="leading-relaxed">High Priority Issues: 24 business hours</li>
              <li className="leading-relaxed">Medium Priority Issues: 48-72 business hours</li>
              <li className="leading-relaxed">Low Priority Issues: 5-10 business days</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Data Backup and Recovery</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>4.1 Backup Policy</strong> – The Company maintains regular backups of client data. Backups are performed daily and stored in geographically distributed locations to ensure data recovery in case of emergencies.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>4.2 Recovery Objectives</strong> – In the event of data loss or service disruption, the Company commits to a Recovery Time Objective (RTO) of up to 24 hours and a Recovery Point Objective (RPO) of up to 24 hours.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Security and Compliance</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>5.1 Security Measures</strong> – The Company implements industry-standard security measures, including encryption, firewalls, and intrusion detection systems, to protect client data and systems.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>5.2 Compliance</strong> – The Company complies with applicable laws and regulations governing data protection, privacy, and security. This may include compliance with GDPR, CCPA, and other relevant regulations.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>5.3 Security Audits</strong> – The Company conducts regular security audits and penetration testing to identify and remediate vulnerabilities.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Service Credits</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              If the Company fails to meet the uptime guarantee specified in Section 1.1, the Client may be eligible for service credits as follows:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">99.0% - 99.4% uptime: 10% monthly service fee credit</li>
              <li className="leading-relaxed">98.5% - 98.9% uptime: 25% monthly service fee credit</li>
              <li className="leading-relaxed">Below 98.5% uptime: 50% monthly service fee credit</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              Service credits are applied as a credit to the Client's next invoice and represent the Client's sole remedy for service unavailability.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Limitations</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>7.1 Not Applicable To</strong> – This SLA does not apply to:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">Services marked as beta, trial, or pre-release</li>
              <li className="leading-relaxed">Outages caused by client actions or third-party services</li>
              <li className="leading-relaxed">Force majeure events or circumstances beyond the Company's control</li>
              <li className="leading-relaxed">Client failure to comply with the Service Terms</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Client Responsibilities</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Clients are responsible for maintaining backup copies of their data, properly configuring their systems, maintaining secure login credentials, reporting issues promptly, and providing necessary information for support staff to assist with troubleshooting.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Modifications to SLA</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Company reserves the right to modify this SLA at any time with 30 days' notice to the Client. Continued use of the services after the notice period constitutes acceptance of the modifications.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10. Contact Information</h2>

            <p className="text-gray-700 leading-relaxed mb-2">
              For questions about this SLA, please contact us at:
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
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
