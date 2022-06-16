import React from 'react';
import { Channel } from './channel';
export class ChannelList extends React.Component {
    render() {
        
        let list = `There is no channels to show`;
        if (this.props.channels) 
        {
            list = this.props.channels.
            map(c => <Channel key="{c.id}" id="{c.id}" name="{c.name}" participants="{c.participants}"> </Channel>); 
        }
        return (
            <div classname="channel-list">

                {list}

                </div>
            );
        }
}