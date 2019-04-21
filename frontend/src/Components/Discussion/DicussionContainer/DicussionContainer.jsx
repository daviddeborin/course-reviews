import React, { Component } from 'react';
import { List, Button } from 'semantic-ui-react';

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
                    <Button attached='left'>Reviews</Button>
                    <Button attached='right'>Discussion</Button>
                </div>




                { /* this is the list of comments  */}
                <div>
                    <List divided relaxed>
                        {
                            this.state.DiscussionPosts.map((p,i) => (
                                <List.Item key={i}>
                                    <List.Icon name='comment' size='small'  verticalAlign='top'/>
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

export default DiscussionContainer;