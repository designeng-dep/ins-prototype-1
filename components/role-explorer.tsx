"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import RoleCard from "./role-card"

const categories = ["All", "Digital & IT", "Green Economy", "Care", "Data Science & Analytics", "Business"]

const roles = [
  {
    id: 1,
    title: "Cyber Security Analyst",
    description:
      "A Cyber Security Analyst monitors IT systems, analyses threats, finds vulnerabilities and implements measures to protect data from cyber attacks",
    interests:
      "protecting networks and data from cyber threats, analyzing security vulnerabilities, developing security protocols",
    salary: 83476,
    openings: 1847,
    credentials: ["AWS Cybersecurity", "Microsoft Cybersecurity Analyst"],
    category: "Digital & IT",
  },
  {
    id: 2,
    title: "AI Engineer",
    description:
      "An AI Engineer builds and optimizes algorithms that enables LLMs to learn from data using large data models and neural networks.",
    interests: "developing machine learning models, working with large datasets, coding in R or python",
    salary: 94112,
    openings: 1847,
    credentials: ["AWS Cybersecurity", "Microsoft Cybersecurity Analyst"],
    category: "Data Science & Analytics",
  },
  {
    id: 3,
    title: "Project Manager",
    description:
      "A project Manager plans and coordinates project, ensuring on-time, within-budget delivery while managing resource, risks and communication",
    interests: "planning and executing projects, managing resource, timelines and communicating with stakeholders",
    salary: 83476,
    openings: 30236,
    credentials: ["AWS Cybersecurity", "Microsoft Cybersecurity Analyst"],
    category: "Business",
  },
]

export default function RoleExplorer() {
  const [level, setLevel] = useState("Beginner")
  const [category, setCategory] = useState("All")

  const filteredRoles = roles.filter((role) => category === "All" || role.category === category)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[#1a0b47] mb-2">Explore roles</h1>
        <p className="text-muted-foreground">
          Advance in your career with recognized credentials across levels. Choose from 40+ roles
        </p>
      </div>

      <div className="flex flex-wrap gap-4 items-center">
        <Select value={level} onValueChange={setLevel}>
          <SelectTrigger className="w-[130px] bg-white">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Beginner">Beginner</SelectItem>
            <SelectItem value="Intermediate">Intermediate</SelectItem>
            <SelectItem value="Advanced">Advanced</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={category === cat ? "default" : "outline"}
              onClick={() => setCategory(cat)}
              className={category === cat ? "bg-[#1a0b47]" : "bg-white"}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredRoles.map((role) => (
          <RoleCard key={role.id} role={role} />
        ))}
      </div>
    </div>
  )
}

