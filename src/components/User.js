import React, { Component } from 'react'
import SkeletonLoader from 'tiny-skeleton-loader-react'


let resNumber = 20;

export class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: false
    }
  }

  

  componentDidMount(){
    fetch(`https://randomuser.me/api/?results=${resNumber}`)
      .then(resp => resp.json())
      .then(resp => {

        //setTimeout(function() {
          this.setState({
            items: resp.results,
            loading: true
          })
        //}.bind(this),50000)

      })
  }

  

  render() {

    var {items, loading} = this.state;

    if(!loading) {        
      return ( <div className="container">
            <div className="row">
            {renderSkeleton()}
            </div>
          </div>
      )      
      
    } else {
      return (
        <div className="container">
          <div className="row">

          {items.map(item => (
            <div className="col-md-3">

              <div className="card">
                <img className="card-img-top" src={item.picture.large} alt={item.name.first} />
                <div className="card-body">
                  <h5 className="card-title">{item.name.first} {item.name.last}</h5>
                  <p className="card-text text-left">
                    <strong>Age:</strong> {item.dob.age} <br/>
                    <strong>Email:</strong> {item.email} <br/>
                    <strong>Address:</strong> {item.location.street.name}, {item.location.city}, {item.location.postcode}
                  </p>
                  <p className="card-text">
                    <small className="text-muted"> {item.email}</small>
                  </p>
                </div>
              </div>

            </div>
          ))}

          </div>
        </div>  

      )
    }
    
  }
}

const renderSkeleton = () => {
  return (
    <>
      <div className="col-md-3">
        <SkeletonLoader height="15.6em" borderRadius="15px"/>
        <br/>
        <SkeletonLoader height="1em" borderRadius="15px"/>
      </div>
      <div className="col-md-3">
        <SkeletonLoader height="15.6em" borderRadius="15px"/>
        <br/>
        <SkeletonLoader height="1em" borderRadius="15px"/>
      </div>
      <div className="col-md-3">
        <SkeletonLoader height="15.6em" borderRadius="15px"/>
        <br/>
        <SkeletonLoader height="1em" borderRadius="15px"/>
      </div>
      <div className="col-md-3">
        <SkeletonLoader height="15.6em" borderRadius="15px"/>
        <br/>
        <SkeletonLoader height="1em" borderRadius="15px"/>
      </div>
      </>
      );
}




export default User
