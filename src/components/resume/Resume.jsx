import React, { useState } from "react";
import "./Resume.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Button from "./Button";

import WorkExperience from "./WorkExperience";

const Resume = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <section className="resume container section" id="resume">
            <h2 className="section__title">Experience</h2>

            <div className="resume__container">
                <Tabs
                    className="tabs"
                    selectedIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                    selectedTabClassName={"is-active"}
                    selectedTabPanelClassName={"is-active"}
                >
                    <TabList className="tab__list">
                        {WorkExperience.map((experience, index) => {
                            const { id, company } = experience;
                            return (
                                <Tab className="tab" key={`company-${id}`}>
                                    <Button>{company}</Button>
                                </Tab>
                            );
                        })}
                    </TabList>

                    {WorkExperience.map((experience) => {
                    const { id, company, yearsActive, title, information, roles } = experience;

                    return (
                        <TabPanel className="tab__panel" key={`panel-${id}`}>
                        <p className="tab__panel-subtitle">{yearsActive}</p>

                        {/* CASE 1: Grouped roles (Amity University) */}
                        {roles ? (
                            roles.map((role, rIndex) => (
                            <div key={rIndex} className="resume__role">
                                <h2 className="tab__panel-title">
                                {role.title} @ {company}
                                </h2>

                                <ul className="tab__panel-list">
                                {role.information.map((info, i) => (
                                    <li key={i}>{info}</li>
                                ))}
                                </ul>
                            </div>
                            ))
                        ) : (
                            /* CASE 2: Normal experience */
                            <>
                            <h2 className="tab__panel-title">
                                {title} @ {company}
                            </h2>

                            <ul className="tab__panel-list">
                                {information.map((info, index) => (
                                <li key={index}>{info}</li>
                                ))}
                            </ul>
                            </>
                        )}
                        </TabPanel>
                    );
                    })}

                </Tabs>
            </div>
        </section>
    );
};

export default Resume;
