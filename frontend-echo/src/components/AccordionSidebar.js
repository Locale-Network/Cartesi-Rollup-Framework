import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";
import CircularProgress from './CircularProgress';


const AccordionSidebar = ({ steps, setCurrentStep }) => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <aside className="accordion-sidebar">
      <ul>
        {steps.map((section, index) => (
          <li key={index}>
            <div onClick={() => toggleSection(index)} className="accordion-toggle" style={{ borderBottom: activeSection === index ? '1px solid #ccc' : 'none'}}>
              <div>
                <span>{activeSection === index ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                <span>{section.title}</span>
              </div>
              {section.title === 'Pre-Qualification' && <CircularProgress completed={1} total={1} />}
              {section.title === 'Application' && <CircularProgress completed={2} total={11} />}
              {section.title === 'Review and Sign' && <CircularProgress completed={0} total={1} />}
            </div>
            {activeSection === index && (
              <ul className="accordion-content">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className={item.completed ? 'completed' : ''} onClick={() => setCurrentStep(item.name)}>
                    <input type='checkbox' checked={item.completed? true: false}/>
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AccordionSidebar;