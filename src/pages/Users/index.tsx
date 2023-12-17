import React from 'react';
import { User } from '@/models/user.model';
import SimpleTemplate from '@/components/SimpleTemplate';
import DefaultTemplate from '@/components/DefaultTemplate';
import BusinessTemplate from '@/components/BusinessTemplae';
import CurriculumTemplate from '@/components/CurriculumTemplate';

interface Props {
    user: User;
}

const UserPage = ({ user }: Props) => {
    
    let TemplateComponent = null;

    if (user && user.template !== undefined) {
        switch (user.template) {
            case 'BusinessTemplate':
                TemplateComponent = BusinessTemplate;
                break;
            case 'CurriculumTemplate':
                TemplateComponent = CurriculumTemplate;
                break;
            case 'SimpleTemplate':
                TemplateComponent = SimpleTemplate;
                break;
            default:
                TemplateComponent = DefaultTemplate;
                break;
        }
    }

    return (
        <div>
            {TemplateComponent && <TemplateComponent user={user} />}
        </div>
    )
}

export default UserPage;