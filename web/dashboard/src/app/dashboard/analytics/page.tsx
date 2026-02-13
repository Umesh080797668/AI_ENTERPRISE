'use client';

import { BarChart2, TrendingUp, Users, Clock, ArrowUpRight, ArrowDownRight, Activity } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const usageData = [
  { name: 'Mon', queries: 24, users: 12 },
  { name: 'Tue', queries: 45, users: 18 },
  { name: 'Wed', queries: 32, users: 15 },
  { name: 'Thu', queries: 65, users: 24 },
  { name: 'Fri', queries: 55, users: 22 },
  { name: 'Sat', queries: 30, users: 10 },
  { name: 'Sun', queries: 20, users: 8 },
];

const tokensData = [
    { name: 'Week 1', tokens: 12000 },
    { name: 'Week 2', tokens: 15000 },
    { name: 'Week 3', tokens: 13500 },
    { name: 'Week 4', tokens: 19000 },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
         <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Analytics</h1>
            <p className="text-gray-500 mt-1">
                Deep dive into your workspace performance and usage metrics.
            </p>
         </div>
         <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
                Last 7 Days
            </Button>
            <Button variant="outline" size="sm">
                Download Report
            </Button>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Queries', value: '1,284', change: '+12.5%', trend: 'up', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50' },
          { label: 'Active Users', value: '42', change: '+4.3%', trend: 'up', icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-50' },
          { label: 'Avg. Response', value: '1.2s', change: '-5.1%', trend: 'up', icon: Clock, color: 'text-sky-600', bg: 'bg-sky-50' }, // Down is good for time, so logically good
          { label: 'Docs Processed', value: '356', change: '+18.2%', trend: 'up', icon: BarChart2, color: 'text-purple-600', bg: 'bg-purple-50' },
        ].map((stat, i) => (
          <Card key={i}>
            <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div className={cn("p-2 rounded-lg", stat.bg, stat.color)}>
                        <stat.icon size={20} />
                    </div>
                    <Badge variant="outline" className={cn("flex items-center gap-1", 
                        stat.change.startsWith('+') ? "text-green-700 bg-green-50 border-green-200" : "text-green-700 bg-green-50 border-green-200"
                    )}>
                        {stat.change}
                        <ArrowUpRight className="h-3 w-3" />
                    </Badge>
                </div>
                <div>
                     <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                     <h3 className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</h3>
                </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* Usage Chart */}
         <Card className="lg:col-span-2">
            <CardHeader>
                <CardTitle>Query Volume</CardTitle>
                <CardDescription>Daily number of AI interactions over the last week.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={usageData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorQueries" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                            <XAxis 
                                dataKey="name" 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{ fill: '#6b7280', fontSize: 12 }} 
                                dy={10}
                            />
                            <YAxis 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{ fill: '#6b7280', fontSize: 12 }} 
                            />
                            <Tooltip 
                                contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                cursor={{ stroke: '#9ca3af', strokeDasharray: '4 4' }}
                            />
                            <Area 
                                type="monotone" 
                                dataKey="queries" 
                                stroke="#4f46e5" 
                                strokeWidth={2}
                                fillOpacity={1} 
                                fill="url(#colorQueries)" 
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
         </Card>

         {/* Token Usage or Secondary Chart */}
         <Card>
             <CardHeader>
                 <CardTitle>Token Usage</CardTitle>
                 <CardDescription>Weekly consumption.</CardDescription>
             </CardHeader>
             <CardContent>
                 <div className="h-[300px] w-full">
                     <ResponsiveContainer width="100%" height="100%">
                         <BarChart data={tokensData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                            <XAxis 
                                dataKey="name" 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{ fill: '#6b7280', fontSize: 12 }} 
                                dy={10}
                            />
                             <Tooltip 
                                cursor={{fill: '#f3f4f6'}}
                                contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }}
                            />
                            <Bar dataKey="tokens" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
                         </BarChart>
                     </ResponsiveContainer>
                 </div>
             </CardContent>
         </Card>
      </div>

      {/* Another Section: Top Users or Departments */}
      <Card>
          <CardHeader>
              <CardTitle>Top Active Users</CardTitle>
              <CardDescription>Team members with highest engagement.</CardDescription>
          </CardHeader>
          <CardContent>
              <div className="space-y-4">
                  {[
                      { name: 'Sarah Wilson', role: 'Product Manager', queries: 452, trend: '+12%' },
                      { name: 'James Rodriguez', role: 'Developer', queries: 321, trend: '+5%' },
                      { name: 'Emily Chen', role: 'Designer', queries: 289, trend: '-2%' },
                  ].map((user, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg group hover:bg-gray-100 transition-colors">
                          <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-semibold">
                                  {user.name.split(' ').map(n=>n[0]).join('')}
                              </div>
                              <div>
                                  <p className="font-medium text-gray-900">{user.name}</p>
                                  <p className="text-xs text-gray-500">{user.role}</p>
                              </div>
                          </div>
                          <div className="text-right">
                              <p className="font-bold text-gray-900">{user.queries}</p>
                              <p className="text-xs text-gray-500">queries</p>
                          </div>
                      </div>
                  ))}
              </div>
          </CardContent>
      </Card>

    </div>
  );
}
