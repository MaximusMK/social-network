import React from 'react';
import styles from './Users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8XBfv0JbIvKL-lySbW51ai1AE7X1SVuNFw&usqp=CAU',
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'I am a boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8XBfv0JbIvKL-lySbW51ai1AE7X1SVuNFw&usqp=CAU',
                    followed: true,
                    fullName: 'Sasha',
                    status: 'I am a boss too',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8XBfv0JbIvKL-lySbW51ai1AE7X1SVuNFw&usqp=CAU',
                    followed: false,
                    fullName: 'Max',
                    status: 'I am a big boss',
                    location: {city: 'Kharkov', country: 'Ukraine'}
                },
            ]
        )
    }

    return <div>
        {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
            <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
        </div>)
        }
    </div>
}
export default Users;