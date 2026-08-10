import { NAVY, AMBER, CREAM, CHAR, LGREY, sora } from "../constants";

const h2 = { fontFamily: sora, fontWeight: 700, fontSize: 24, color: NAVY, marginBottom: 12, marginTop: 40 };
const h3 = { fontFamily: sora, fontWeight: 600, fontSize: 18, color: NAVY, marginBottom: 8, marginTop: 28 };
const p = { fontSize: 15, color: CHAR, lineHeight: 1.8, marginBottom: 12 };
const list = { fontSize: 15, color: CHAR, lineHeight: 1.8, paddingLeft: 20, marginBottom: 12 };

export function Terms() {
  return (
    <article>
      <div style={{ marginBottom: 8 }}>
        <span style={{ background: `${AMBER}18`, borderRadius: 24, padding: "4px 14px", fontSize: 12, fontWeight: 600, color: AMBER }}>Last updated: July 2025</span>
      </div>
      <h1 style={{ fontFamily: sora, fontWeight: 800, fontSize: 36, color: NAVY, marginBottom: 16 }}>Terms of Service</h1>
      <p style={p}>These Terms of Service ("Terms") govern your access to and use of the DukaDesk platform, website, and services (collectively, the "Platform"). By using the Platform, you agree to these Terms. If you do not agree, do not use the Platform.</p>

      <div>
        <h2 style={h2}>1. Definitions</h2>
        <ul style={list}>
          <li><strong>"Platform"</strong> means the DukaDesk operating system, website, mobile app, and all related services.</li>
          <li><strong>"Merchant"</strong> means the individual, business or organisation that owns a desk (their tenant app) on DukaDesk.</li>
          <li><strong>"Consumer"</strong> means an individual who uses a Merchant's tenant app on DukaDesk.</li>
          <li><strong>"Tenant App"</strong> means the custom application created by a Merchant using the Platform.</li>
          <li><strong>"Content"</strong> means all text, images, data, information, and materials submitted by Merchants.</li>
          <li><strong>"Services"</strong> means the features and functionality provided through the Platform.</li>
        </ul>
      </div>

      <div>
        <h2 style={h2}>2. Account Registration</h2>
        <p style={p}>To use the Platform as a Merchant, you must create an account. You agree to:</p>
        <ul style={list}>
          <li>Provide accurate, current, and complete information</li>
          <li>Maintain and update your account information</li>
          <li>Keep your login credentials confidential</li>
          <li>Notify us immediately of any unauthorised access</li>
          <li>Be responsible for all activity under your account</li>
        </ul>
        <p style={p}>You must be at least 18 years old to create an account. Desk owners must be duly registered in Nigeria or their country of operation.</p>
      </div>

      <div>
        <h2 style={h2}>3. Platform Services</h2>
        <p style={p}>DukaDesk provides a unified operating system for organisations to build, operate, and scale their digital presence. Our platform includes:</p>
        <ul style={list}>
          <li>Tenant app builder and customisation tools</li>
          <li>Payment processing integration</li>
          <li>Customer management and engagement tools</li>
          <li>Analytics and reporting</li>
          <li>Smart insights</li>
          <li>Integration marketplace</li>
        </ul>
        <p style={p}>We reserve the right to modify, suspend, or discontinue any feature with reasonable notice.</p>
      </div>

      <div>
        <h2 style={h2}>4. Subscription and Payments</h2>
        <p style={p}>Our pricing plans are as described on our Pricing page. Key terms:</p>
        <ul style={list}>
          <li><strong>Free Plan:</strong> Limited features at no cost. We may modify free plan limits at any time.</li>
          <li><strong>Paid Plans:</strong> Billed monthly or annually as selected. Fees are non-refundable except as expressly stated.</li>
          <li><strong>Taxes:</strong> You are responsible for all applicable taxes.</li>
          <li><strong>Payment Method:</strong> You must maintain a valid payment method on file.</li>
          <li><strong>Late Payment:</strong> We may suspend services if payment is overdue by 30 days.</li>
          <li><strong>Price Changes:</strong> We will notify you 30 days before any price change.</li>
        </ul>
      </div>

      <div>
        <h2 style={h2}>5. Merchant Responsibilities</h2>
        <p style={p}>As a Merchant, you agree to:</p>
        <ul style={list}>
          <li>Comply with all applicable laws and regulations</li>
          <li>Ensure your Tenant App does not infringe third-party rights</li>
          <li>Provide accurate product, service, and pricing information</li>
          <li>Fulfil orders and provide customer service to your consumers</li>
          <li>Not use the Platform for illegal, fraudulent, or abusive activities</li>
          <li>Not attempt to circumvent our security or payment systems</li>
          <li>Maintain appropriate privacy practices for your consumers</li>
        </ul>
      </div>

      <div>
        <h2 style={h2}>6. Intellectual Property</h2>
        <p style={p}><strong>Our IP:</strong> The DukaDesk platform, including its code, design, branding, and technology, is owned by DukaDesk Technologies Ltd. You may not copy, modify, reverse engineer, or create derivative works without our permission.</p>
        <p style={p}><strong>Your IP:</strong> You retain ownership of your Content. By submitting Content, you grant DukaDesk a non-exclusive, worldwide licence to host, store, and display your Content solely for operating the Platform.</p>
      </div>

      <div>
        <h2 style={h2}>7. Third-Party Services</h2>
        <p style={p}>The Platform integrates with third-party services (Paystack, Flutterwave, etc.). We are not responsible for the acts or omissions of these third parties. Your use of their services is governed by their terms and policies.</p>
      </div>

      <div>
        <h2 style={h2}>8. Limitation of Liability</h2>
        <p style={p}>To the maximum extent permitted by law:</p>
        <ul style={list}>
          <li>DukaDesk is provided "as is" without warranties of any kind</li>
          <li>We are not liable for indirect, incidental, or consequential damages</li>
          <li>Our total liability is limited to the fees you paid in the 12 months preceding the claim</li>
          <li>We are not liable for downtime, data loss, or business interruption</li>
        </ul>
      </div>

      <div>
        <h2 style={h2}>9. Termination</h2>
        <p style={p}>Either party may terminate these Terms at any time. Upon termination:</p>
        <ul style={list}>
          <li>Your access to the Platform will be revoked</li>
          <li>Your data will be exported upon request within 30 days</li>
          <li>After 90 days, your data will be permanently deleted</li>
          <li>Outstanding fees remain payable</li>
        </ul>
        <p style={p}>We may suspend or terminate your account immediately for breach of these Terms.</p>
      </div>

      <div>
        <h2 style={h2}>10. Indemnification</h2>
        <p style={p}>You agree to indemnify and hold DukaDesk harmless from any claims arising from your use of the Platform, your Content, or your breach of these Terms.</p>
      </div>

      <div>
        <h2 style={h2}>11. Governing Law and Dispute Resolution</h2>
        <p style={p}>These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes shall first be resolved through informal negotiation. If unresolved, disputes will be referred to mediation in Lagos, Nigeria. If mediation fails, disputes shall be resolved by the Lagos State High Court.</p>
      </div>

      <div>
        <h2 style={h2}>12. Changes to Terms</h2>
        <p style={p}>We may update these Terms at any time. Material changes will be communicated via email or platform notice. Continued use after the effective date constitutes acceptance of the updated Terms.</p>
      </div>

      <div>
        <h2 style={h2}>13. Entire Agreement</h2>
        <p style={p}>These Terms constitute the entire agreement between you and DukaDesk regarding the Platform and supersede any prior agreements.</p>
      </div>

      <div style={{ background: CREAM, borderRadius: 16, padding: "32px", marginTop: 48 }}>
        <h2 style={{ fontFamily: sora, fontWeight: 700, fontSize: 20, color: NAVY, marginBottom: 12 }}>Contact Us</h2>
        <p style={{ fontSize: 15, color: CHAR, lineHeight: 1.8, marginBottom: 4 }}>Email: <strong style={{color: AMBER}}>legal@dukadesk.com</strong></p>
        <p style={{ fontSize: 15, color: CHAR, lineHeight: 1.8, marginBottom: 4 }}>DukaDesk Technologies Ltd</p>
        <p style={{ fontSize: 15, color: CHAR, lineHeight: 1.8 }}>Lagos, Nigeria</p>
      </div>
    </article>
  );
}