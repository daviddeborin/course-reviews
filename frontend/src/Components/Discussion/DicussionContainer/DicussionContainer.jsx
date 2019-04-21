import React, { Component } from './node_modules/react';
import { List } from './node_modules/semantic-ui-react'

class DiscussionContainer extends Component {
    state = { 
        DiscussionPosts : [
            {user: "Ligma",post: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."},
            {user: "Ligma",post: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."},
            {user: "Ligma",post: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."},
            {user: "Ligma",post: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."},
            {user: "Ligma",post: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."},
            {user: "Ligma",post: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."},
            {user: "Ligma",post: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."},
            {user: "Ligma",post: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."},
            {user: "Ligma",post: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."}
        ]
     }
    render() { 
        return (
            <div>
                { /* Course Name Component goes here */}
                { /* Metrics Component goes here */}
                { /* Discussion/Reviews button Component goes here */}

                <div>
                    <List divided relaxed>
                        {
                            this.state.DiscussionPosts.map(p => (
                                <List.Item>
                                    <List.Content>
                                        <List.Header>{p.user}</List.Header>
                                        <List.Description>{p.post}</List.Description>
                                    </List.Content>
                                </List.Item>
                            ))
                        }
                    </List>
                </div>
            </div>
        )
    }
}
        return ( <div>
            { /* Course Name Component goes here */}
            { /* Metrics Component goes here */}
            { /* Discussion/Reviews button Component goes here */}

            <div>
                <List divided relaxed>
                    {this.state.DiscussionPosts.map(p =>(
                        <List.Item></List.Item>
                            
                        </List.Item>
                    )}
                </List>
            </div>
                )}}

                export default