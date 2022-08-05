export interface FooterProps {
    height: number,
}

export function Footer({
    height,
}: FooterProps) {
    return (
        <div className='dtable-footer' style={{height}}>
        </div>
    );
}
