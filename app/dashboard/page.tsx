"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Leaf,
  Plus,
  Search,
  Bell,
  Settings,
  ChevronDown,
  BarChart3,
  FileText,
  Users,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MoreHorizontal,
  LogOut,
  Sprout,
  Recycle,
  Droplets,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

const stats = [
  { titleKey: "dashboard.totalProjects", value: "12", change: "+2", trend: "up", icon: FileText },
  { titleKey: "dashboard.aiAnalyses", value: "48", change: "+8", trend: "up", icon: BarChart3 },
  { titleKey: "dashboard.peopleImpacted", value: "24.5K", change: "+3.2K", trend: "up", icon: Users },
  { titleKey: "dashboard.sdgAlignment", value: "92%", change: "+5%", trend: "up", icon: TrendingUp },
]

const recentProjects = [
  {
    id: 1,
    nameKey: "dashboard.project.urbanFarming",
    categoryKey: "dashboard.project.urbanFarming.category",
    status: "completed",
    date: "2",
    dateUnit: "dashboard.hoursAgo",
    impactKey: "dashboard.project.urbanFarming.impact",
    icon: Sprout,
    color: "text-green-400",
  },
  {
    id: 2,
    nameKey: "dashboard.project.wasteRecycling",
    categoryKey: "dashboard.project.wasteRecycling.category",
    status: "analyzing",
    date: "5",
    dateUnit: "dashboard.hoursAgo",
    impactKey: "dashboard.project.wasteRecycling.impact",
    icon: Recycle,
    color: "text-cyan-400",
  },
  {
    id: 3,
    nameKey: "dashboard.project.cleanWater",
    categoryKey: "dashboard.project.cleanWater.category",
    status: "pending",
    date: "1",
    dateUnit: "dashboard.dayAgo",
    impactKey: "dashboard.project.cleanWater.impact",
    icon: Droplets,
    color: "text-blue-400",
  },
  {
    id: 4,
    nameKey: "dashboard.project.solarEnergy",
    categoryKey: "dashboard.project.solarEnergy.category",
    status: "completed",
    date: "2",
    dateUnit: "dashboard.daysAgo",
    impactKey: "dashboard.project.solarEnergy.impact",
    icon: TrendingUp,
    color: "text-yellow-400",
  },
]

const insights = [
  {
    id: 1,
    titleKey: "dashboard.insight.cropRotation.title",
    descriptionKey: "dashboard.insight.cropRotation.description",
    projectKey: "dashboard.project.urbanFarming",
    priority: "high",
  },
  {
    id: 2,
    titleKey: "dashboard.insight.recycling.title",
    descriptionKey: "dashboard.insight.recycling.description",
    projectKey: "dashboard.project.wasteRecycling",
    priority: "medium",
  },
  {
    id: 3,
    titleKey: "dashboard.insight.filtration.title",
    descriptionKey: "dashboard.insight.filtration.description",
    projectKey: "dashboard.project.cleanWater",
    priority: "low",
  },
]

function StatusBadge({ status, t }: { status: string; t: (key: string) => string }) {
  const statusConfig = {
    completed: {
      icon: CheckCircle2,
      labelKey: "dashboard.completed",
      className: "bg-primary/20 text-primary border-primary/30",
    },
    analyzing: {
      icon: Loader2,
      labelKey: "dashboard.analyzing",
      className: "bg-accent/20 text-accent border-accent/30",
    },
    pending: {
      icon: Clock,
      labelKey: "dashboard.pending",
      className: "bg-muted text-muted-foreground border-border/50",
    },
  }

  const config = statusConfig[status as keyof typeof statusConfig]
  const Icon = config.icon

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border",
        config.className
      )}
    >
      <Icon className={cn("w-3 h-3", status === "analyzing" && "animate-spin")} />
      {t(config.labelKey)}
    </span>
  )
}

function PriorityIndicator({ priority }: { priority: string }) {
  const colors = {
    high: "bg-red-500",
    medium: "bg-yellow-500",
    low: "bg-green-500",
  }

  return (
    <span className={cn("w-2 h-2 rounded-full", colors[priority as keyof typeof colors])} />
  )
}

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Header/Navbar */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
                <Leaf className="w-4 h-4 text-primary" />
              </div>
              <span className="text-lg font-bold text-foreground">SustainAI</span>
            </Link>

            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder={t("dashboard.searchPlaceholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-secondary/50 border-border/50 focus:border-primary/50 text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground hover:bg-secondary/50">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground hover:bg-secondary/50">
                <Settings className="w-5 h-5" />
              </Button>
              <LanguageSwitcher />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 hover:bg-secondary/50">
                    <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary font-medium text-sm">
                      JD
                    </div>
                    <span className="hidden sm:inline text-foreground">John Doe</span>
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 bg-card border-border/50">
                  <DropdownMenuItem className="text-foreground focus:bg-secondary focus:text-foreground">
                    <Settings className="w-4 h-4 mr-2" />
                    {t("dashboard.settings")}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-border/50" />
                  <DropdownMenuItem className="text-destructive focus:bg-destructive/10 focus:text-destructive">
                    <LogOut className="w-4 h-4 mr-2" />
                    {t("dashboard.signOut")}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8 relative z-10">
        {/* Welcome section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              {t("dashboard.welcome")}
            </h1>
            <p className="text-muted-foreground mt-1">
              {t("dashboard.subtitle")}
            </p>
          </div>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25">
            <Link href="/submit">
              <Plus className="w-4 h-4 mr-2" />
              {t("dashboard.newProject")}
            </Link>
          </Button>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.titleKey}
              className="relative group bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div className={cn("flex items-center gap-1 text-sm font-medium", stat.trend === "up" ? "text-primary" : "text-destructive")}>
                  {stat.trend === "up" ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                  {stat.change}
                </div>
              </div>
              <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{t(stat.titleKey)}</p>
            </div>
          ))}
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent projects */}
          <div className="lg:col-span-2">
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl">
              <div className="flex items-center justify-between p-6 border-b border-border/50">
                <h2 className="text-lg font-semibold text-foreground">{t("dashboard.recentProjects")}</h2>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 hover:bg-primary/10">
                  {t("dashboard.viewAll")}
                </Button>
              </div>
              <div className="divide-y divide-border/50">
                {recentProjects.map((project) => (
                  <div key={project.id} className="flex items-center gap-4 p-6 hover:bg-secondary/30 transition-colors">
                    <div className={cn("w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center", project.color)}>
                      <project.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate">{t(project.nameKey)}</p>
                      <p className="text-sm text-muted-foreground">{t(project.categoryKey)}</p>
                    </div>
                    <div className="hidden sm:block text-right">
                      <p className="text-sm text-foreground">{t(project.impactKey)}</p>
                      <p className="text-xs text-muted-foreground">{project.date} {t(project.dateUnit)}</p>
                    </div>
                    <StatusBadge status={project.status} t={t} />
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground hover:bg-secondary/50">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-card border-border/50">
                        <DropdownMenuItem className="text-foreground focus:bg-secondary focus:text-foreground">
                          {t("dashboard.viewDetails")}
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-foreground focus:bg-secondary focus:text-foreground">
                          {t("dashboard.editProject")}
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-border/50" />
                        <DropdownMenuItem className="text-destructive focus:bg-destructive/10 focus:text-destructive">
                          {t("dashboard.delete")}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Insights */}
          <div>
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl">
              <div className="flex items-center justify-between p-6 border-b border-border/50">
                <h2 className="text-lg font-semibold text-foreground">{t("dashboard.aiInsights")}</h2>
                <div className="flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-primary animate-pulse" />
                  <span className="text-sm text-primary font-medium">3 {t("dashboard.new")}</span>
                </div>
              </div>
              <div className="divide-y divide-border/50">
                {insights.map((insight) => (
                  <div key={insight.id} className="p-6 hover:bg-secondary/30 transition-colors cursor-pointer">
                    <div className="flex items-start gap-3">
                      <PriorityIndicator priority={insight.priority} />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground mb-1">{t(insight.titleKey)}</p>
                        <p className="text-sm text-muted-foreground line-clamp-2">{t(insight.descriptionKey)}</p>
                        <p className="text-xs text-primary mt-2">{t(insight.projectKey)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-border/50">
                <Button variant="ghost" className="w-full text-primary hover:text-primary/80 hover:bg-primary/10">
                  {t("dashboard.viewAllInsights")}
                </Button>
              </div>
            </div>

            {/* Quick actions */}
            <div className="mt-6 bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-2">{t("dashboard.helpTitle")}</h3>
              <p className="text-sm text-muted-foreground mb-4">{t("dashboard.helpDescription")}</p>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                {t("dashboard.startConsultation")}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
