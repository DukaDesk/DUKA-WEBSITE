import { NAVY, AMBER, WHITE, CHAR, LGREY, BORDER, CREAM, sora } from "../constants";

const section = { marginBottom: 40 };
const h2 = { fontFamily: sora, fontWeight: 700, fontSize: 24, color: NAVY, marginBottom: 12, marginTop: 40 };
const h3 = { fontFamily: sora, fontWeight: 600, fontSize: 18, color: NAVY, marginBottom: 8, marginTop: 28 };
const p = { fontSize: 15, color: CHAR, lineHeight: 1.8, marginBottom: 12 };
const list = { fontSize: 15, color: CHAR, lineHeight: 1.8, paddingLeft: 20, marginBottom: 12 };

export function Privacy() {
  return (
    <article>
      <div style={{ marginBottom: 8 }}>
        <span style={{ background: `${AMBER}18`, borderRadius: 24, padding: "4px 14px", fontSize: 12, fontWeight: 600, color: AMBER }}>Last updated: July 2025</span>
      </div>
      <h1 style={{ fontFamily: sora, fontWeight: 800, fontSize: 36, color: NAVY, marginBottom: 16 }}>Privacy Policy</h1>
      <p style={p}>DukaDesk Technologies Ltd ("DukaDesk", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.</p>

      <div style={section}>
        <h2 style={h2}>1. Information We Collect</h2>
        <h3 style={h3}>1.1 Information You Provide</h3>
        <p style={p}>We collect information you voluntarily provide when you:</p>
        <ul style={list}>
          <li>Create an account or register for our services</li>
          <li>Set up your merchant profile or tenant app</li>
          <li>Process payments or transactions</li>
          <li>Contact our support team</li>
          <li>Sign up for newsletters or marketing communications</li>
        </ul>
        <p style={p}><strong>This may include:</strong> your full name, email address, phone number, desk name, desk address, bank account details, payment information, and any other information you choose to provide.</p>

        <h3 style={h3}>1.2 Information Collected Automatically</h3>
        <p style={p}>When you access our platform, we automatically collect:</p>
        <ul style={list}>
          <li>Device information (browser type, operating system, IP address)</li>
          <li>Usage data (pages visited, features used, time spent)</li>
          <li>Cookies and similar tracking technologies (see Section 6)</li>
        </ul>
      </div>

      <div style={section}>
        <h2 style={h2}>2. How We Use Your Information</h2>
        <p style={p}>We use your information for the following purposes:</p>
        <ul style={list}>
          <li><strong>Service Delivery:</strong> To operate, maintain, and provide you with our platform features</li>
          <li><strong>Payment Processing:</strong> To facilitate transactions through our payment partners</li>
          <li><strong>Customer Support:</strong> To respond to your inquiries and resolve issues</li>
          <li><strong>Improvements:</strong> To analyse usage patterns and improve our platform</li>
          <li><strong>Communications:</strong> To send service updates, security alerts, and marketing communications (with your consent)</li>
          <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
        </ul>
      </div>

      <div style={section}>
        <h2 style={h2}>3. Legal Basis for Processing</h2>
        <p style={p}>We process your personal data under the following lawful bases:</p>
        <ul style={list}>
          <li><strong>Consent:</strong> Where you have given clear consent for us to process your data for a specific purpose</li>
          <li><strong>Contract:</strong> Where processing is necessary to fulfil our contractual obligations to you</li>
          <li><strong>Legal Obligation:</strong> Where we are required to process data by applicable law</li>
          <li><strong>Legitimate Interests:</strong> Where processing is necessary for our legitimate business interests and does not override your rights</li>
        </ul>
      </div>

      <div style={section}>
        <h2 style={h2}>4. Data Sharing and Disclosure</h2>
        <p style={p}>We may share your information with:</p>
        <ul style={list}>
          <li><strong>Service Providers:</strong> Payment processors (Paystack, Flutterwave), cloud infrastructure providers, and analytics services</li>
          <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
          <li><strong>Legal Requirements:</strong> Where required by law or to protect our rights</li>
          <li><strong>With Your Consent:</strong> Where you have explicitly agreed to sharing</li>
        </ul>
        <p style={p}>We do not sell your personal information to third parties.</p>
      </div>

      <div style={section}>
        <h2 style={h2}>5. Data Subject Rights</h2>
        <p style={p}>Under the Nigeria Data Protection Regulation (NDPR) and applicable laws, you have the following rights:</p>
        <ul style={list}>
          <li><strong>Right of Access:</strong> Request copies of your personal data</li>
          <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
          <li><strong>Right to Erasure:</strong> Request deletion of your data (subject to legal obligations)</li>
          <li><strong>Right to Portability:</strong> Request transfer of your data in a structured format</li>
          <li><strong>Right to Restrict Processing:</strong> Request limitation of how we use your data</li>
          <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
          <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time without affecting service legality</li>
        </ul>
        <p style={p}>To exercise any of these rights, contact us at <strong style={{color:AMBER}}>privacy@dukadesk.com</strong>. We will respond within 30 days.</p>
      </div>

      <div style={section}>
        <h2 style={h2}>6. Cookies and Tracking</h2>
        <p style={p}>We use cookies and similar technologies to improve your experience. These include:</p>
        <ul style={list}>
          <li><strong>Essential Cookies:</strong> Required for platform functionality</li>
          <li><strong>Analytics Cookies:</strong> To understand how you use our platform</li>
          <li><strong>Preference Cookies:</strong> To remember your settings</li>
        </ul>
        <p style={p}>You can control cookie settings through your browser preferences. Disabling essential cookies may affect platform functionality.</p>
      </div>

      <div style={section}>
        <h2 style={h2}>7. Data Retention</h2>
        <p style={p}>We retain your personal data only as long as necessary to fulfil the purposes for which it was collected, or as required by law. Retention periods are:</p>
        <ul style={list}>
          <li>Account data: Duration of account + 90 days after closure</li>
          <li>Transaction data: 7 years (regulatory requirement)</li>
          <li>Communications data: 3 years after last interaction</li>
          <li>Analytics data: 26 months (aggregated, anonymised)</li>
        </ul>
      </div>

      <div style={section}>
        <h2 style={h2}>8. Data Security</h2>
        <p style={p}>We implement appropriate technical and organisational measures to protect your data, including:</p>
        <ul style={list}>
          <li>256-bit SSL/TLS encryption for all data in transit</li>
          <li>Encryption at rest for sensitive data</li>
          <li>Access controls and authentication requirements</li>
          <li>Regular security audits and vulnerability assessments</li>
          <li>Staff training on data protection</li>
        </ul>
      </div>

      <div style={section}>
        <h2 style={h2}>9. Cross-Border Data Transfers</h2>
        <p style={p}>Your data may be transferred to and processed in countries other than Nigeria where our service providers operate. We ensure appropriate safeguards are in place, including Standard Contractual Clauses where required.</p>
      </div>

      <div style={section}>
        <h2 style={h2}>10. Children's Privacy</h2>
        <p style={p}>Our platform is not intended for individuals under 18 years of age. We do not knowingly collect personal data from children. If we become aware that a child has provided us with personal data, we will take steps to delete it.</p>
      </div>

      <div style={section}>
        <h2 style={h2}>11. Changes to This Policy</h2>
        <p style={p}>We may update this Privacy Policy from time to time. Material changes will be notified via email or a prominent notice on our platform. Continued use after changes constitutes acceptance of the updated policy.</p>
      </div>

      <div style={{ ...section, background: CREAM, borderRadius: 16, padding: "32px", marginTop: 48 }}>
        <h2 style={{ fontFamily: sora, fontWeight: 700, fontSize: 20, color: NAVY, marginBottom: 12 }}>Contact Us</h2>
        <p style={{ fontSize: 15, color: CHAR, lineHeight: 1.8, marginBottom: 4 }}>Data Protection Officer: <strong style={{color:AMBER}}>privacy@dukadesk.com</strong></p>
        <p style={{ fontSize: 15, color: CHAR, lineHeight: 1.8, marginBottom: 4 }}>DukaDesk Technologies Ltd</p>
        <p style={{ fontSize: 15, color: CHAR, lineHeight: 1.8 }}>Lagos, Nigeria</p>
      </div>
    </article>
  );
}