import React, { useState, useEffect } from "react"
import { Header, List } from "semantic-ui-react"
import "./App.css"
import axios from "axios"

interface Activity {
  id: string
  title: string
  date: Date
  description: string
  category: string
  city: string
  venue: string
}

function App() {
  const [activities, setActivities] = useState<Activity[]>([])

  const fetchActivities = async () => {
    const { data } = await axios.get("http://localhost:5000/api/activities")

    setActivities(data)
  }

  useEffect(() => {
    try {
      fetchActivities()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <div>
      <Header as="h2" icon="users" content="Reactivities" />
      <List>
        {activities.map((activity) => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </List>
    </div>
  )
}

export default App
