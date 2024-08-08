"use client";

import React from 'react'

import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/myHooks';
import { Project } from './projects';

export default function Projects() {
    const { ref } = useSectionInView("Projects");
  
    return (
      <div
        id="projects"
        ref={ref}
        className="mb-28 scroll-mt-28 text-center sm:mb-40"
      >
        <h2 className="text-3xl font-medium text-gray-950 dark:text-white">
          My Projects
        </h2>
        <div className="m-auto mt-8">
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} index={index} />
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }