export type FilterProps = {
    stops: number[];
    onChange: (selectedStops: (number | string)[]) => void;
}