import React from 'react';
import Image from 'next/image';
import { Team } from './aboutUsData';
import CommonIcon from '../../common/CommonIcon';

interface TeamFeatureProps {
    team: Team;
}

const TeamFeature: React.FC<TeamFeatureProps> = ({ team }) => {
    const capitalize = (string: string) => string.charAt(0) + string.substring(1)

    return (
        <div className="team-section">
            <h1>{team.title}</h1>
            <h4>{team.subtitle}</h4>

            <div className="team-cont">
                {team.members &&
                    team.members.map((member, key) => (
                        <div key={key} className="team">
                            <Image 
                                src={member.image}
                                alt={member.name}
                                width={270}
                                height={360}
                                style={{ objectFit: 'cover'}}
                            />
                            <div className="team-details">
                                <h3>{member.name}</h3>
                                <h4>{member.role}</h4>
                            </div>
                            <div className="team-socmed-link">
                                {member.socialLinks && Object.entries(member.socialLinks).map(([key, value]) => (
                                    <div key={key} className={`icon ${key}`}>
                                        <div className="tooltip">{capitalize(key)}</div>
                                        <span><CommonIcon name={key} size={18} /></span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default TeamFeature;
