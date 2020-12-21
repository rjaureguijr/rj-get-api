import React from 'react';

const List = (props) => {
    const { repos } = props;

    if (!repos || !repos.length) {
       return <p>No repos here!</p>;
    }

    return (
        <div>
            <h2 className='h2-list-heading'>Here are some repos</h2>

            <ul>
                {repos.map((repo) => {
                    return (
                        <li key={repo.id} className='list'>
                            <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
                                <span className='repo-text'>{repo.name}</span>
                            </a>:{ ' '}

                            <span className='repo-description'>{repo.description}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default List;