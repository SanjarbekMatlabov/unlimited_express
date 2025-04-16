// document.addEventListener('DOMContentLoaded', () => {
//     // Chat icon functionality
//     const chatIcon = document.querySelector('.chat-icon');
//     if (chatIcon) {
//         chatIcon.addEventListener('click', () => {
//             alert('Chat support will be available soon!');
//         });
//     }

//     // Contact form submission
//     const submitBtn = document.querySelector('.submit-btn');
//     if (submitBtn) {
//         submitBtn.addEventListener('click', () => {
//             const fullName = document.getElementById('full-name')?.value;
//             const email = document.getElementById('email')?.value;
//             const company = document.getElementById('company')?.value;
//             const phone = document.getElementById('phone')?.value;
//             const fax = document.getElementById('fax')?.value;
//             const subject = document.getElementById('subject')?.value;
//             const message = document.getElementById('message')?.value;
//             const smsUpdates = document.getElementById('sms-updates')?.checked;

//             if (fullName && email && phone && subject && message) {
//                 alert(`Thank you, ${fullName}! Your message has been sent. We'll get back to you at ${email}. SMS Updates: ${smsUpdates ? 'Enabled' : 'Disabled'}.`);
//                 document.getElementById('full-name').value = '';
//                 document.getElementById('email').value = '';
//                 if (document.getElementById('company')) document.getElementById('company').value = '';
//                 document.getElementById('phone').value = '';
//                 if (document.getElementById('fax')) document.getElementById('fax').value = '';
//                 document.getElementById('subject').value = '';
//                 document.getElementById('message').value = '';
//                 if (document.getElementById('sms-updates')) document.getElementById('sms-updates').checked = false;
//             } else {
//                 alert('Please fill in all required fields.');
//             }
//         });
//     }

//     // Smooth scroll for footer links
//     document.querySelectorAll('.footer-links a, .legal-links a').forEach(anchor => {
//         anchor.addEventListener('click', (e) => {
//             e.preventDefault();
//             const targetId = anchor.getAttribute('href').substring(1);
//             const targetElement = document.getElementById(targetId);
//             if (targetElement) {
//                 window.scrollTo({
//                     top: targetElement.offsetTop - 60,
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });
// });