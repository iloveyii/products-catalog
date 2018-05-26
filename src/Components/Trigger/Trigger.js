import React from 'react';

export default class Trigger extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state={showDetails:false};
    }

    onClick() {
        console.log('Clicked inside model');
        this.state = {showDetails:true};
    }

    render() {
        const { trigger } = this.props;

        return (
            <div key={trigger.id} style={ {marginBottom: '20px'}}>
                <div style={ {width: '100%'}} className="ui card">
                    <div className="content">
                        <i className="left floated snowflake outline icon"></i>
                        <i className="right floated like icon"></i>
                        <i className="right floated star icon"></i>
                        <div className="left floated header">
                            {trigger.attributes.event.name}
                            <p></p>
                        </div>
                        <div className="description">
                            <p></p>
                        </div>
                    </div>
                    <div className="extra content">
                        <span className="left floated like">
                          <i className="compass icon"></i>
                            {trigger.attributes.event['start-time']}
                        </span>
                        <span className="right floated star">
                          <i className="star icon"></i>
                          <a onClick={this.onClick} href="#">Open</a>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}