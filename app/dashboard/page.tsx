import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <p>its Dashboard</p>
<Link href={'/dashboard/documents'}>
documents</Link>
    </div>
    
  )
}

export default Dashboard