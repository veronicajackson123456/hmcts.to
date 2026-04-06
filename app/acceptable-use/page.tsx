import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AcceptableUsePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Acceptable Use Policy</h1>
          <p className="text-lg text-gray-600 mb-12">Version 1.0 - Last Updated: 2025</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              This Acceptable Use Policy ("Policy") is established by HMCTS LLC - Hospitality Management Consultancy & Technology Solutions (the "Company", "we", "us", "our", and "HMCTS") to ensure the responsible and lawful use of our website located at hospitalitysoftwaresolutions.com (the "Site") and all associated services, products, and platforms (collectively, the "Services").
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Prohibited Activities</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Users agree not to engage in any of the following prohibited activities:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">
                <strong>Illegal Activities</strong> – Using the Services for any illegal purpose or in violation of any applicable laws or regulations.
              </li>
              <li className="leading-relaxed">
                <strong>Harassment and Abuse</strong> – Engaging in any form of harassment, bullying, threats, abuse, or discrimination based on race, color, religion, gender, sexual orientation, national origin, disability, age, or any other protected characteristic.
              </li>
              <li className="leading-relaxed">
                <strong>Hate Speech and Offensive Content</strong> – Posting, uploading, or transmitting content that promotes hate, violence, discrimination, or is otherwise offensive or defamatory.
              </li>
              <li className="leading-relaxed">
                <strong>Fraud and Misrepresentation</strong> – Engaging in fraudulent activities, making false statements, or misrepresenting your identity or credentials.
              </li>
              <li className="leading-relaxed">
                <strong>Unauthorized Access</strong> – Attempting to gain unauthorized access to the Services, user accounts, or Company systems through hacking, phishing, or other means.
              </li>
              <li className="leading-relaxed">
                <strong>Malware and Viruses</strong> – Uploading, distributing, or transmitting viruses, malware, spyware, or any other malicious code.
              </li>
              <li className="leading-relaxed">
                <strong>Intellectual Property Infringement</strong> – Violating the intellectual property rights of the Company or third parties, including copyrights, trademarks, patents, and trade secrets.
              </li>
              <li className="leading-relaxed">
                <strong>Spam and Unsolicited Communications</strong> – Sending unsolicited emails, spam, or other unwanted communications through the Services.
              </li>
              <li className="leading-relaxed">
                <strong>System Disruption</strong> – Attempting to disrupt, interfere with, or damage the functionality of the Services or Company systems.
              </li>
              <li className="leading-relaxed">
                <strong>Impersonation</strong> – Impersonating another person or entity, or falsely claiming to be affiliated with the Company or a third party.
              </li>
              <li className="leading-relaxed">
                <strong>Privacy Violations</strong> – Collecting, soliciting, or disclosing personal information about other users without their consent.
              </li>
              <li className="leading-relaxed">
                <strong>Commercial Use Without Authorization</strong> – Using the Services for commercial purposes without prior written authorization from the Company.
              </li>
              <li className="leading-relaxed">
                <strong>Reverse Engineering</strong> – Attempting to reverse engineer, decompile, or discover the source code or underlying technology of the Services.
              </li>
              <li className="leading-relaxed">
                <strong>Automated Access</strong> – Using bots, scrapers, or automated tools to access the Services without authorization.
              </li>
              <li className="leading-relaxed">
                <strong>Content Exploitation</strong> – Using the Services to exploit, abuse, or harm minors or to engage in any form of exploitation.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">User-Generated Content</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              If the Services allow users to submit, post, or display content ("User Content"), you are solely responsible for such content and its legality, accuracy, and appropriateness. By submitting User Content, you grant the Company a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and distribute your content in connection with the Services.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Company reserves the right to remove or modify any User Content that violates this Policy or any applicable law, without prior notice or liability.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Enforcement</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              The Company may investigate any suspected violation of this Policy and may take action, in its sole discretion, including but not limited to:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">Warning the user of the violation</li>
              <li className="leading-relaxed">Suspending or terminating the user's account</li>
              <li className="leading-relaxed">Removing or modifying User Content</li>
              <li className="leading-relaxed">Reporting the violation to law enforcement authorities</li>
              <li className="leading-relaxed">Taking legal action to recover damages</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Security Responsibility</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              While the Company implements reasonable security measures to protect the Services, no system is entirely secure. Users are responsible for maintaining the confidentiality of their login credentials and for any activities that occur under their account. If you suspect unauthorized access to your account, you must notify the Company immediately.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Reporting Violations</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              If you discover a violation of this Policy or any illegal activity, please report it immediately to the Company at info@hospitalitysoftwaresolutions.com. The Company will investigate and take appropriate action.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Cooperation with Law Enforcement</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Company may cooperate with law enforcement authorities and may disclose user information when required by law or to protect the rights, property, and safety of the Company, its users, or the public.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Changes to This Policy</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              The Company may update this Policy at any time. Your continued use of the Services following the posting of changes constitutes your acceptance of such changes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Contact Information</h2>

            <p className="text-gray-700 leading-relaxed mb-2">
              If you have questions about this Policy or wish to report a violation, please contact us at:
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
