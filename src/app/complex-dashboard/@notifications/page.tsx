import React from 'react';
import Card from "@/app/components/card";
import Link from "next/link";

const Notifications = () => {
    return (
        <Card >
            <div>Notifications</div>
            <div>
                <Link href='/complex-dashboard/archived'>Archived</Link>
            </div>
        </Card>
    );
};

export default Notifications;