import React from "react"
import {connect} from "react-redux"

import AddPrinter from "../../components/PrintAt/AddPrinter"
import LocatorMap from "../../components/PrintAt/LocatorMap"
import DocumentUpload from "../../components/PrintAt/DocumentUpload"
import PrintQueue from "../../components/PrintAt/PrintQueue"

import BottomNav from "../../components/BottomNav"
import Navbar from "../../components/Navbar"

const menu = [{
  toggle: "addPrinter",
  icon: "info",
  text: "Configuration"
}, {
  to: "/dashboard",
  icon: "details",
  text: "Dashboard"
}]

const Dashboard = props => (
  <div>
    <Navbar menu={menu} />
    <main>
      <div style={{display: props.section === 0 ? "block" : "none"}}>
        <div style={{display: props.showAdd ? "block" : "none"}}>
          <AddPrinter />
        </div>
        <LocatorMap />
      </div>
      <div style={{display: props.section === 1 ? "block" : "none"}}>
        <DocumentUpload />
      </div>
      <div style={{display: props.section === 2 ? "block" : "none"}}>
        <PrintQueue />
      </div>
    </main>
    <BottomNav />
  </div>
)

const mapStateToProps = state => ({
  section: state.app.ui.section || 0,
  showAdd: state.app.ui.addPrinter || false
})

export default connect(mapStateToProps)(Dashboard)
