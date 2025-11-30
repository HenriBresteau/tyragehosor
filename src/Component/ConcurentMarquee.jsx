import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { persons } from "@/data/persons";

const ReviewCard = ({ name }) => {
    return (
        <figure className={cn("relative w-fit  overflow-hidden")}>
            <div className="flex flex-row items-center gap-2">
                <div className="flex flex-col">
                    <figcaption className="text-lg font-bold p-8 ">
                        {name}
                    </figcaption>
                </div>
            </div>
        </figure>
    );
};

export function ConcurentMarquee() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:60s]">
                {persons
                    .sort((a, b)=> a.name.localeCompare(b.name))
                    .map((review) => (
                        <ReviewCard key={review.id} {...review} />
                    ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-greenlight "></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-greenlight"></div>
        </div>
    );
}
