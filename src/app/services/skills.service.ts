import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';
import { Level } from '../types/level.enum';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills: Skill[] = [
    {
      id: 1,
      name: 'HTML',
      level: Level.Expert
    },
    {
      id: 2,
      name: 'CSS',
      level: Level.Advanced
    },
    {
      id: 3,
      name: 'JavaScript',
      level: Level.Advanced
    },
    {
      id: 4,
      name: 'jQuery',
      level: Level.Advanced
    }
  ];
  
  constructor() { }
}
