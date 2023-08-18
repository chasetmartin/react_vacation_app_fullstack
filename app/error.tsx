'use client';

interface ErrorStateProps {
    error: Error;
}

import { useEffect } from "react";
import EmptyState from "./components/emptyState";

const ErrorState: React.FC<ErrorStateProps> = ({
    error
}) => {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return ( 
        <EmptyState 
            title="Uh oh!"
            subtitle="Something went wrong. Please try again later."
        />
     );
}
 
export default ErrorState;