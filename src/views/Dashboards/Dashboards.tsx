import { Button } from '@components';
import { FaFileDownload } from 'react-icons/fa';

export default function Dashboards() {
    return (
        <div>
            <Button
                onClick={() => console.log('kizo')}
                theme="outlined"
                title="Button"
                icon={<FaFileDownload />}
            />
        </div>
    );
}
