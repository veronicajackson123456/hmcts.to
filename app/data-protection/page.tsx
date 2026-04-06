import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function DataProtectionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Data Protection Policy</h1>
          <p className="text-lg text-gray-600 mb-12">Version 1.0 - Last Updated: 2025</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              This Data Protection Policy ("Policy") is established by HMCTS LLC - Hospitality Management Consultancy & Technology Solutions (the "Company", "we", "us", "our", and "HMCTS") to outline our commitment to protecting personal data and complying with applicable data protection laws, including the General Data Protection Regulation (GDPR) and other relevant regulations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Data Protection Principles</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Company is committed to processing personal data in accordance with the following principles:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">
                <strong>Lawfulness, Fairness, and Transparency</strong> – We process personal data lawfully and transparently, with a valid legal basis for processing.
              </li>
              <li className="leading-relaxed">
                <strong>Purpose Limitation</strong> – We collect and process personal data for specified, explicit, and legitimate purposes.
              </li>
              <li className="leading-relaxed">
                <strong>Data Minimization</strong> – We collect only the personal data that is necessary for the specified purposes.
              </li>
              <li className="leading-relaxed">
                <strong>Accuracy</strong> – We ensure that personal data is accurate and kept up-to-date.
              </li>
              <li className="leading-relaxed">
                <strong>Storage Limitation</strong> – We retain personal data for no longer than necessary for the specified purposes.
              </li>
              <li className="leading-relaxed">
                <strong>Integrity and Confidentiality</strong> – We implement appropriate security measures to protect personal data against unauthorized processing, loss, or destruction.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Legal Basis for Processing</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We process personal data based on one or more of the following legal bases:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">Consent from the data subject</li>
              <li className="leading-relaxed">Performance of a contract with the data subject</li>
              <li className="leading-relaxed">Compliance with legal obligations</li>
              <li className="leading-relaxed">Protection of vital interests</li>
              <li className="leading-relaxed">Performance of tasks in the public interest</li>
              <li className="leading-relaxed">Legitimate interests pursued by the Company or a third party</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Data Subject Rights</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Individuals whose personal data we process have the following rights:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">
                <strong>Right of Access</strong> – The right to obtain information about what personal data we hold and how we process it.
              </li>
              <li className="leading-relaxed">
                <strong>Right to Rectification</strong> – The right to request correction of inaccurate or incomplete personal data.
              </li>
              <li className="leading-relaxed">
                <strong>Right to Erasure</strong> – The right to request deletion of personal data under certain circumstances.
              </li>
              <li className="leading-relaxed">
                <strong>Right to Restrict Processing</strong> – The right to request limitation of processing under certain circumstances.
              </li>
              <li className="leading-relaxed">
                <strong>Right to Data Portability</strong> – The right to receive personal data in a structured, commonly used, and machine-readable format and to transmit it to another controller.
              </li>
              <li className="leading-relaxed">
                <strong>Right to Object</strong> – The right to object to processing of personal data.
              </li>
              <li className="leading-relaxed">
                <strong>Right not to be Subject to Automated Decision-Making</strong> – The right not to be subject to decisions based solely on automated processing.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Data Retention</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We retain personal data for as long as necessary to fulfill the purposes for which it was collected, or as required by law. When data is no longer needed, we securely delete or anonymize it. Retention periods vary depending on the nature of the data and the purposes of processing.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Data Security</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Company implements appropriate technical and organizational security measures to protect personal data against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, access controls, regular security audits, and employee training. However, no method of transmission or storage is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Data Breaches</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              In the event of a personal data breach, the Company will notify affected individuals and relevant authorities as required by law without undue delay. We will take appropriate remedial measures to mitigate harm and prevent future breaches.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Third-Party Data Processors</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We may share personal data with third-party data processors to provide services on our behalf. All third-party processors are contractually obligated to protect personal data and comply with applicable data protection laws. We maintain a list of our data processors and their processing activities.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">International Data Transfers</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Personal data may be transferred to, stored, and processed in countries outside the European Economic Area. When we transfer data internationally, we implement appropriate safeguards, such as Standard Contractual Clauses or other mechanisms recognized by applicable law.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Children's Data</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Services are not intended for children under the age of 13 (or the applicable age of digital consent in their jurisdiction). We do not knowingly collect or process personal data from children without verifiable parental consent. If we become aware that we have collected data from a child without appropriate consent, we will take steps to delete such data.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Data Protection Impact Assessments</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              For high-risk processing activities, the Company conducts Data Protection Impact Assessments (DPIAs) to identify and mitigate risks to data subjects.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Exercising Your Rights</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              To exercise any of your data protection rights, please submit a written request to:
            </p>

            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Email:</strong> info@hospitalitysoftwaresolutions.com
            </p>

            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Phone:</strong> +1 (845) 904-7626
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Address:</strong> 30 N GOULD STREET SHERIDAN, WYOMING 82801 USA
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              We will respond to your request within the timeframe specified by applicable law (typically 30 days).
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Contact of Data Protection Authority</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              If you believe your data protection rights have been violated, you have the right to lodge a complaint with your local data protection authority.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Changes to This Policy</h2>

            <p className="text-gray-700 leading-relaxed">
              The Company may update this Policy to reflect changes in our data protection practices or applicable laws. We will notify you of any significant changes.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
