import React, { useState, useEffect } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator'



function ReactBootstrapTable() {

  const [vaccines, setVaccines] = useState([])

  const addID = (data) => {
    const newVaccines = data.map((vacc, i) => {
      let id = { 'id': i }
      return Object.assign(vacc, id)
    })
    //console.log(newVaccines)
    setVaccines(newVaccines)
  }

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/vaccine')
    .then(data => data.json())
    .then(data => {
      addID(data.data)
      //console.log(data)
    })
  }, [])

  //const products = ["1","8","6"]
  const columns = [
    { dataField: 'id', text: 'ID', hidden: true, align: 'left' },
    { dataField: 'candidate', text: 'Candidatos', align: 'left' }, 
    { dataField: 'sponsors', text: 'Patrocinadores', align: 'left' }, 
    { dataField: 'trialPhase', text: 'Fase', align: 'left' },
    { dataField: 'institutions', text: 'Instituciones', align: 'left' },
    { dataField: 'funding', text: 'Fondos', align: 'left' },
  ];

  return (
    <div>
      <BootstrapTable 
      bootstrap4
      keyField="id" 
      id=''
      data={ vaccines } 
      columns={ columns } 
      pagination={ paginationFactory() }
      />
    </div>
  )
}

export default ReactBootstrapTable
