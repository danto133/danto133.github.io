const mindsets = [
  {
    id: 1,
    name: "Problem Solver",
    text: "Possess a strong aptitude for creative problem-solving, enabling efficient resolution of coding challenges and design dilemmas.",
  },
  {
    id: 2,
    name: "Continuous Learner",
    text: "Committed to ongoing professional development, staying abreast of the latest technologies, frameworks, and best practices in web development.",
  },
  {
    id: 3,
    name: "Attention to Detail",
    text: "Meticulous attention to detail ensures the delivery of clean, efficient code and polished user experiences across all projects.",
  },
  {
    id: 4,
    name: "Collaborative Spirit",
    text: "Excel in cross-functional teamwork and communication, adept at integrating diverse perspectives to achieve project success.",
  },
  {
    id: 5,
    name: "User-Centric Approach",
    text: "Prioritize the needs and experiences of end-users, crafting intuitive interfaces and responsive designs that enhance usability and engagement.",
  },
  {
    id: 6,
    name: "Adaptability",
    text: "Flexibility in adapting strategies and techniques to meet evolving project requirements and technological advancements.",
  },
  {
    id: 7,
    name: "Passion for Problem-Solving",
    text: "Enthusiastic about tackling complex challenges and innovating solutions that push the boundaries of web development.",
  },
  {
    id: 8,
    name: "Resilience",
    text: "Demonstrated ability to persevere through setbacks and learn from failures, emerging stronger and more skilled with each challenge overcome.",
  },
  {
    id: 9,
    name: "Attention to Performance and Security",
    text: "Commitment to optimizing website performance and implementing robust security measures to ensure a seamless and secure user experience.",
  },
  {
    id: 10,
    name: "Customer-Centric Thinking",
    text: "Understand and align with client needs and business objectives, delivering solutions that exceed expectations and drive success.",
  },
];
const MindsetItems = () => {
  return (
    <div className="list w-full h-auto clear-both float-left">
      <ul className="ml-[-40px] list-none flex flex-wrap">
        {mindsets.map((service) => (
          <li className="mb-[40px] w-1/3 pl-[40px]" key={service.id}>
            <div className="list_inner w-full h-full clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border bg-white pt-[45px] pr-[30px] pb-[40px] pl-[30px] transition-all duration-300">
              <span className="number inline-block mb-[25px] relative w-[60px] h-[60px] leading-[60px] text-center rounded-full bg-[rgba(0,0,0,.03)] font-bold text-black font-montserrat transition-all duration-300">
                {service.id <= 9 ? `0${service.id}` : service.id}
              </span>
              <h3 className="title font-bold text-black text-[18px] mb-[15px]">
                {service.name}
              </h3>
              <p className="text">{service.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MindsetItems;
