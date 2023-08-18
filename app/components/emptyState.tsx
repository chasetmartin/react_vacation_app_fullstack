'use client';

interface EmptyStateProps {
    title?: string;
    subtitle?: string;
    showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
    
}) => {
    return ( 
        <div>Empty</div>
     );
}
 
export default EmptyState;