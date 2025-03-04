import RoleExplorer from "@/components/role-explorer"
import SalaryTrends from "@/components/salary-trends"
import JobReadinessChecker from "@/components/job-readiness-checker"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-gray-100 rounded-lg" />
              <div>
                <h2 className="font-semibold text-lg">Job & salary trends</h2>
                <p className="text-muted-foreground text-sm">
                  Check out our latest insight on job and salary trends across industries
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-gray-100 rounded-lg" />
              <div>
                <h2 className="font-semibold text-lg">Browse careers by industry</h2>
                <p className="text-muted-foreground text-sm">
                  Explore salaries and job trends across careers from every industry
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <JobReadinessChecker />
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <SalaryTrends />
          </div>

          <RoleExplorer />
        </div>
      </div>
    </main>
  )
}

