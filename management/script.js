// ==========================================
// ELEMENTS
// ==========================================

const landing = document.getElementById("landing");
const planner = document.getElementById("planner");

const startBtn = document.getElementById("startBtn");

const membersBtn = document.getElementById("membersBtn");
const membersCard = document.getElementById("membersCard");
const closeMembers = document.getElementById("closeMembers");

const topicButtons = document.querySelectorAll(".topic");

const topicTitle = document.getElementById("topicTitle");
const topicContent = document.getElementById("topicContent");

const progress = document.getElementById("progress");

let explored = 0;
let visited = [];
// ==========================================
// OPEN PLANNER
// ==========================================

startBtn.addEventListener("click", () => {

    landing.style.display = "none";

    planner.classList.remove("hidden");

    planner.classList.add("show");

});
// ==========================================
// MEMBERS CARD
// ==========================================

membersBtn.addEventListener("click", () => {

    membersCard.classList.remove("hidden");

    membersCard.classList.add("show");

});

closeMembers.addEventListener("click", () => {

    membersCard.classList.remove("show");

    membersCard.classList.add("hidden");

});
// ==========================================
// TOPIC CONTENT
// ==========================================

const topics = {

"Introduction": {
    title: "Introduction",
    content: `
<h3>📌 Key Idea</h3>

<p>
Management is the process of planning, organizing, leading, and controlling resources to achieve organizational goals efficiently and effectively.
</p>

<h3>📝 Explanation</h3>

<p>
Every successful business relies on management to coordinate its people, finances, operations, and other resources. It provides direction, ensures efficient use of resources, and helps the business adapt to internal and external changes.
</p>

<h3>🔗 Connection to Management</h3>

<p>
Management serves as the heart of every business because it integrates all departments and functions, ensuring they work together toward common organizational objectives.
</p>

<h3>🌍 Real-Life Example</h3>

<p>
For example, when a supermarket launches a new branch, management coordinates hiring staff, purchasing stock, budgeting, marketing the opening, and monitoring performance to ensure the branch operates successfully.
</p>
`
},

"Types of Businesses": {
    title: "Types of Businesses",
    content: `
<h3>📌 Key Idea</h3>

<p>
Businesses exist in different forms of ownership, including sole proprietorships, partnerships, companies, cooperatives, and public enterprises. Although they differ in structure and objectives, they all rely on effective management to succeed.
</p>

<h3>📝 Explanation</h3>

<p>
Management plans, organizes, leads, and controls the activities of every type of business. It coordinates people, finances, technology, and other resources while ensuring that business operations align with organizational goals. Management also supports informed decision-making, improves efficiency, and helps businesses adapt to changing market conditions.
</p>

<h3>🔗 Connection to Management</h3>

<p>
Management is the common factor that integrates all types of businesses. It ensures legal and ethical compliance, coordinates resources effectively, manages risks, and develops strategies that promote growth, profitability, and long-term sustainability regardless of the business structure.
</p>

<h3>🌍 Real-Life Example</h3>

<p>
A sole proprietorship may use management to oversee daily operations and customer service, while a multinational company uses management to coordinate multiple departments and international branches. Despite their differences, both depend on management to achieve their objectives efficiently.
</p>
`
},

"Business Environment": {
    title: "Business Environment",
    content: `
<h3>📌 Key Idea</h3>

<p>
The business environment consists of the internal and external factors that influence how an organization operates and achieves its objectives. Effective management enables businesses to respond to these factors successfully.
</p>

<h3>📝 Explanation</h3>

<p>
Management continuously monitors both the internal environment, such as employees, resources, and organizational culture, and the external environment, including customers, competitors, government policies, technology, and economic conditions. Through planning, organizing, leading, and controlling, management ensures the business adapts to changes while maintaining efficiency and competitiveness.
</p>

<h3>🔗 Connection to Management</h3>

<p>
Management integrates the business environment by analyzing opportunities and threats, allocating resources effectively, guiding employees through change, and adjusting business strategies in response to Political, Economic, Social, Technological, Environmental, and Legal (PESTEL) factors. This enables the organization to remain competitive and achieve its long-term goals.
</p>

<h3>🌍 Real-Life Example</h3>

<p>
When new environmental regulations require businesses to reduce plastic waste, management develops new policies, invests in eco-friendly packaging, trains employees on the new procedures, and informs customers about the changes. This coordinated response helps the business remain compliant while protecting its reputation.
</p>
`
},

"Complex Business Organisations": {
    title: "Complex Business Organisations",
    content: `
<h3>📌 Key Idea</h3>

<p>
Complex business organisations involve collaborations such as strategic alliances, joint ventures, franchising, licensing, mergers, acquisitions, and takeovers. These structures require effective management to coordinate their operations and achieve shared objectives.
</p>

<h3>📝 Explanation</h3>

<p>
Management plans, organizes, leads, and controls the activities of different business partners to ensure smooth cooperation. It coordinates resources, oversees communication, aligns organizational cultures, manages change, and ensures that all parties work together efficiently while maintaining quality standards and meeting contractual obligations.
</p>

<h3>🔗 Connection to Management</h3>

<p>
Management integrates complex business organisations by coordinating partnerships, allocating resources, managing risks, resolving conflicts, and monitoring performance. Through effective leadership and strategic planning, management ensures that collaborative arrangements contribute to organizational efficiency, competitiveness, and long-term success.
</p>

<h3>🌍 Real-Life Example</h3>

<p>
When two companies merge, management oversees the integration of employees, departments, technology, and company cultures. It ensures that operations continue smoothly while maximizing the benefits of the merger and minimizing disruption to customers and employees.
</p>
`
},
"Business Stakeholders": {
    title: "Business Stakeholders",
    content: `
<h3>📌 Key Idea</h3>

<p>
Business stakeholders are individuals or groups that influence or are affected by a business. They include both internal stakeholders, such as owners, managers and employees, and external stakeholders, such as customers, suppliers, government, creditors and the community.
</p>

<h3>📝 Explanation</h3>

<p>
Management coordinates the interests of all stakeholders by ensuring effective communication, fair decision-making, and responsible use of resources. It promotes employee welfare, customer satisfaction, supplier partnerships, legal compliance, and community engagement while working towards the organization's objectives.
</p>

<h3>🔗 Connection to Management</h3>

<p>
Management integrates business stakeholders by balancing their different interests, resolving conflicts through negotiation and ethical leadership, applying the Clarkson Principles, using the Power–Interest Matrix to prioritize stakeholder engagement, and ensuring Corporate Social Responsibility (CSR) and regulatory compliance. These actions strengthen relationships, build trust, and support the long-term success of the organization.
</p>

<h3>🌍 Real-Life Example</h3>

<p>
When a company plans to open a new branch, management consults employees, secures funding from investors, works with suppliers, obtains government approvals, and communicates with the local community. By coordinating the needs of each stakeholder group, the business is able to expand successfully while maintaining positive relationships.
</p>
`
},

"Business Life Cycle": {
    title: "Business Life Cycle",
    content: `
<h3>📌 Key Idea</h3>

<p>
The business life cycle describes the stages a business passes through, from the initial idea to growth, maturity, and possible decline or renewal. Effective management is essential at every stage to ensure continued success.
</p>

<h3>📝 Explanation</h3>

<p>
Management plans, organizes, leads, and controls resources throughout the life cycle. During the Idea Stage, management evaluates opportunities and develops a business plan. In the Startup Stage, it organizes operations and launches the business. During Growth, management coordinates expansion, recruits employees, and improves systems. At Maturity, it focuses on efficiency, innovation, and customer retention. If the business enters Decline, management leads restructuring, innovation, or renewal to restore growth.
</p>

<h3>🔗 Connection to Management</h3>

<p>
Management integrates every stage of the business life cycle by making strategic decisions, coordinating people and resources, solving operational challenges, and adapting to changing market conditions. It ensures the business successfully progresses from one stage to the next while maintaining long-term sustainability.
</p>

<h3>🌍 Real-Life Example</h3>

<p>
A technology startup begins with a new app idea. Management secures funding, launches the product, hires more employees as demand grows, introduces new features to remain competitive during maturity, and later redesigns the app to meet changing customer needs and prevent decline.
</p>
`
},

"International Business": {
    title: "International Business",
    content: `
<h3>📌 Key Idea</h3>

<p>
International business involves commercial activities that take place across national borders. Effective management enables businesses to coordinate operations, resources, and strategies in different countries while adapting to diverse economic, legal, and cultural environments.
</p>

<h3>📝 Explanation</h3>

<p>
Management plans international expansion by identifying global opportunities and selecting suitable market entry strategies such as exporting, franchising, licensing, joint ventures, or foreign direct investment. It organizes financial, human, and technological resources across countries, leads culturally diverse teams, and coordinates global supply chains to ensure smooth operations.
</p>

<h3>🔗 Connection to Management</h3>

<p>
Management integrates international business by making strategic decisions, coordinating global operations, promoting effective cross-cultural communication, managing international risks, and ensuring compliance with different legal and regulatory requirements. These functions help businesses remain competitive and sustainable in the global marketplace.
</p>

<h3>🌍 Real-Life Example</h3>

<p>
When a company expands into a new country, management researches the local market, recruits and trains employees, adapts products to local customer preferences, complies with national laws, and coordinates logistics to ensure the new branch operates successfully.
</p>
`
},

"Entrepreneurship and Small Business Management": {
    title: "Entrepreneurship and Small Business Management",
    content: `
<h3>📌 Key Idea</h3>

<p>
Entrepreneurship is the process of identifying opportunities and creating new businesses, while small business management focuses on operating and growing those businesses successfully. Effective management transforms business ideas into sustainable enterprises.
</p>

<h3>📝 Explanation</h3>

<p>
Management identifies business opportunities, develops business plans, and organizes financial, human, and physical resources. It leads employees, motivates teams, makes strategic decisions, and ensures the efficient use of limited resources. Management also encourages innovation, manages risks, and monitors business performance to support continuous growth.
</p>

<h3>🔗 Connection to Management</h3>

<p>
Management integrates entrepreneurship and small business management by coordinating planning, resource allocation, innovation, leadership, and decision-making. These functions enable entrepreneurs to overcome challenges, satisfy customer needs, remain competitive, and achieve long-term business sustainability.
</p>

<h3>🌍 Real-Life Example</h3>

<p>
A young entrepreneur opens a catering business after identifying a demand for event services. Management develops the business plan, secures funding, recruits staff, purchases equipment, markets the business, and monitors customer feedback to ensure the business grows successfully.
</p>
`
},

"Corporate Social Responsibility": {
    title: "Corporate Social Responsibility",
    content: `
<h3>📌 Key Idea</h3>

<p>
Corporate Social Responsibility (CSR) is a business approach that requires organizations to operate ethically while contributing positively to society, the economy, and the environment. Effective management ensures that CSR becomes part of the organization's everyday operations and long-term strategy.
</p>

<h3>📝 Explanation</h3>

<p>
Management develops CSR policies, sets ethical and sustainability goals, and allocates resources to support community development, employee welfare, environmental conservation, and legal compliance. It also promotes responsible leadership, encourages employee participation, and evaluates the effectiveness of CSR initiatives to ensure they create value for both the business and society.
</p>

<h3>🔗 Connection to Management</h3>

<p>
Management integrates Corporate Social Responsibility by balancing profitability with ethical, legal, social, and environmental responsibilities. Through planning, organizing, leading, and controlling CSR activities, management strengthens stakeholder relationships, enhances the organization's reputation, and supports long-term business sustainability.
</p>

<h3>🌍 Real-Life Example</h3>

<p>
A manufacturing company introduces a recycling program, reduces energy consumption, supports local schools through community projects, and ensures fair treatment of employees. Management coordinates these initiatives while maintaining profitability, demonstrating that responsible business practices and business success can go hand in hand.
</p>
`
},

};
// ==========================================
// TOPIC BUTTONS
// ==========================================

topicButtons.forEach(button=>{

button.addEventListener("click",()=>{

const selected = button.dataset.topic;

topicTitle.textContent = topics[selected].title;

topicContent.innerHTML = topics[selected].content;

topicContent.classList.remove("fadeIn");

void topicContent.offsetWidth;

topicContent.classList.add("fadeIn");

if(!visited.includes(selected)){

visited.push(selected);

explored++;

progress.textContent = explored;

button.classList.add("visited");

}

});

});
// ==========================================
// COMPLETION MESSAGE
// ==========================================

function checkCompletion(){

if(explored===9){

setTimeout(()=>{

alert(
"🎉 Congratulations!\n\nYou have explored all nine Business Studies topics.\n\nThank you for viewing Group 5's interactive presentation!"
);

},300);

}

}

topicButtons.forEach(button=>{

button.addEventListener("click",checkCompletion);

});
const nextBtn = document.getElementById("nextBtn");
const diagramPage = document.getElementById("diagramPage");
const backPlanner = document.getElementById("backPlanner");

nextBtn.addEventListener("click", () => {

    planner.classList.add("hidden");

    diagramPage.classList.remove("hidden");

});

backPlanner.addEventListener("click", () => {

    diagramPage.classList.add("hidden");

    planner.classList.remove("hidden");

});
