import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#231942">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2023 - Present"
          iconStyle={{ background: '#6B2D5B', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Support Engineer - Rebuy Engine
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Remote/Distributed
          </h4>
          <p>
            Responsible for troubleshooting and resolving technical issues to
            support high-growth merchants/brands in the e-commerce space
            (Shopify). Collaborates closely with Product and Engineering teams
            to conduct user acceptance testing, identify platform bugs, and
            gather user feedback to improve product development for the Rebuy
            Engine app. Assists in updating product documentation and refining
            Support Team operational processes.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Apr 2023 - June 2023"
          iconStyle={{ background: '#6B2D5B', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer (Volunteer) - Hack for LA
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>
            Actively contributed to the development of the HackForLA.org
            website, facilitating the non-profit organization's communication
            with volunteers, stakeholders, and donors. Collaborated with a
            distributed team of volunteer developers to implement bug fixes and
            feature requests. Reviewed pull requests and provides feedback to
            improve code clarity, maintainability, and functionality.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Jul 2022 - Mar 2023"
          iconStyle={{ background: '#231942', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Thinkful - Software Engineering Program
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online</h4>
          <p>
            Learned industry best practices and software development standards
            with a focus on JavaScript, HTML5, CSS3, React, Node.js, PostgreSQL,
            RESTful APIs, algorithms, and data structures while collaborating
            with senior web developers in a mentor-student relationship. Worked
            towards gaining the necessary technical skills to make a career
            pivot into software engineering.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Apr 2019 - Apr 2022"
          iconStyle={{ background: '#6B2D5B', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Media Operations Manager - Google (YouTube)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>
            Managed digital media launch operations for subscription and
            ad-supported video content across YouTube and YouTube TV for major
            entertainment studios, record labels, and advertising partners.
            Established new operational processes and developed proprietary
            digital media management software in partnership with global Product
            and Engineering teams.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Feb 2016 - Mar 2018"
          iconStyle={{ background: '#6B2D5B', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Program Manager, Ad Technology - Netflix
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>
            Promoted to Program Manager. Led trainings and conducted user
            acceptance tests for new product feature releases for internal
            marketing technology tools used by the entire Netflix Global
            Marketing Operations org. Managed ad tech integrations with external
            partners such as Google, YouTube, Facebook, and Twitter.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Feb 2016 - Mar 2018"
          iconStyle={{ background: '#6B2D5B', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Global Ad Operations Lead - Netflix
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Collaborated with Product and Engineering teams to develop
            machine-learning powered marketing technology tools capable of
            producing 500K+ unique variations of highly targeted dynamic ads
            promoting Netflix content in 30+ languages across ~190 countries.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Sep 2015 - Feb 2016"
          iconStyle={{ background: '#6B2D5B', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Ad Operations Team Lead - DataXu (Roku)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>
          <p>
            Promoted to Team Lead. Managed the launch and performance of
            cross-platform programmatic marketing campaigns using in-house ad
            technology software to support 50+ clients with digital media
            budgets exceeding $10MM+. Served as technical point of contact for
            ad creative issues related to campaign performance issues.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2014 - Sep 2015"
          iconStyle={{ background: '#6B2D5B', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Ad Operations Specialist - DataXu (Roku)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>
          <p>
            Responsible for digital ad configuration/setup, tracking pixel
            implementation, ad quality QA, and technical troubleshooting for
            digital marketing campaigns using DataXu’s ad technology software.
            Oversaw third-party ad server software certification processes and
            integrated DataXu's ad technology stack with more than 30 ad
            technology partners, including Google, Facebook, and Yahoo.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jun 2012 - May 2013"
          iconStyle={{ background: '#6B2D5B', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Digital Ad Ops Coordinator - Boston Globe Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>
          <p>
            Managed the launch and optimization of digital advertising campaigns
            across all Boston Globe Media affiliated websites such as Boston.com
            and BostonGlobe.com, reaching millions of site visitors each month.
            Led the testing and rollout of innovative display media and video ad
            units (HTML, JS, and XML formats).
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Nov 2010 - Jun 2012"
          iconStyle={{ background: '#6B2D5B', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Digital Ad Ops Coordinator - Audacy, Inc.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>
          <p>
            Partnered with digital producers to develop and launch display
            banner ads (HTML and JS formats), promotional emails, and
            audio/video ads for digital advertising campaigns across multiple
            New England commercial radio station websites and their associated
            internet radio streaming apps.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010"
          iconStyle={{ background: '#231942', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Emerson College</h3>
          <h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>
          <p>Bachelor of Science, Marketing</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
