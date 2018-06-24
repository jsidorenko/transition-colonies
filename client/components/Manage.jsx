import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Funds from './Manage/Funds'
import Login from '../containers/Manage/Login'
import Menu from '../containers/Manage/Menu'
import Home from './Manage/Home'
import Skills from './Manage/Skills'
import Tasks from './Manage/Tasks'
import Token from './Manage/Token'
import styles from './Manage.scss'

const Manage = ({ colonyClient }) => (
  <div className={styles.container}>
    {!colonyClient ?
      <Login />
    :
      <div>
        <Menu />
        <div className={styles.content}>
          <Switch>
            <Route path="/manage/funds" component={Funds} />
            <Route path="/manage/skills" component={Skills} />
            <Route path="/manage/tasks" component={Tasks} />
            <Route path="/manage/token" component={Token} />
            <Route path="/manage" component={Home} />
          </Switch>
        </div>
      </div>
    }
  </div>
)

export default Manage
