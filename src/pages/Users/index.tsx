import React from 'react';
import { User } from '@/models/user.model';
import DefaultTemplate from '@/templates/DefaultTemplate';
import BusinessTemplate from '@/templates/BusinessTemplae';
import CurriculumTemplate from '@/components/CurriculumTemplate';
import SimpleTemplate from '@/components/SimpleTemplate';

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