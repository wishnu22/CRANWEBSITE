import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    image: "data:image/jpeg;base64,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",
    review:
      "Cranvalor's whey protein has been a game-changer for my fitness journey. The taste is amazing, and it's easy to digest. Highly recommended!",
  },
  {
    id: 2,
    name: "Arjun Menon",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlgMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAgMEBQYHAQj/xAA6EAACAQMCBAMGBAQGAwEAAAABAgMABBEFIQYSMUETUWEHFCJxgZEyobHBI0JS0SQzYnLh8EOy8RX/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAgEQACAgICAgMAAAAAAAAAAAAAAQIRAzESIQRBEyJR/9oADAMBAAIRAxEAPwC0IrL+NssBucdfWllIO1cHNgYOPMGj4IO34h0z0rIsHTP6V0LnYbUcLkfDjel1jydxTARRG6Yz60qsQGfljNGlZYYy8jrEoG7MdhWf8Re1Sys5WttEtvfJAcNOxKoMdcbb/kPWhIC+yslugeQhEHU52qKveK9Fs4jJLfw8q7sEbJ+w61jN9xNd6vdSS6pfXAR1wEKAxqfLl7fnUcsM+FlYxeGCSPDQBht1we3yzToLNotPaBw3cziH38xsSQDIhUHy3I/WrVbSRXSB4ZFkU9GU5Fed7f3e9ikjZEeRV5iVVlfp1/pOcdxXLa91DhySK60y+uI45VDR9Qh74K9D+dFAejJEwucU35f4oA8qr/AnGsPEtnyXapb3qfCyZ2b1H0qzhP4gPoaQCXLvQZDjPelyvc0VumO1ADcAYGSM5ocobJ6HFKY3/Fj513G21IBLkU5wN/1owXFd5SDR13oA4F8q5R/w9d/KhQAwCg4/OlQpOMMMA70AhHejchJwT8xQADG3RMZNLTvHBbyTTyCOKMFmdjsoHeuphVLY2FZf7atemgjtdEhlIWZPGnC7ZGcKD6ZB+1NICocb8V3XE19IYJJU06E4jiGRzD+tvnVaW4mj3UgKox2BIx370ikoD8xXOCDjO1H8eV3JzjJz0qyQ6PLcSBCokdtgG6/nU5bW6RLHOHDwMyxyRODmEnowzv1qI9wujEtzGjuvNuyjPKe3SrFdubjTkuDLzyuCsgGDzf6vmD2Pr8yFJCURjTnK82YHwyf0qds+oz/3FRuoSl4XhUggS84UZwox27ev3rgvmeQPkC5jHLz4/wAwdOVhTr/85pUaWOCSRpFyiJnI887bVDdbKUW9EZp161ldQzRFg8brhlbB67/lW+8AcSprtksMpPvUK/xMjqa89zoVdlxygHpj9jV79kOqm01+O0HLySnBY/CceW333NN6JWzdmSkyn1p2yelJMlIBqRvXNt++PKlyhzXPCGT60gGxOXI6Y/OlFXK5/OuvACdxRliKfh6HqM0AcCYJ/ehRwpPVcfWhQAyH/TSo5VwTjNJeGnOB8Zz2yaOsKg/DnfzOaYBw4JA2I74rD/bSkp4xjLKeU2kYj9Rls4+ua3A2y7Eljy7j4uprKvbnp/hvpWoxjA+KE/8AsP3poGZMFz3qwaJpviRO7xq6bEFxgH5H+9QkATxVLqWXO4HlU/p9w0v+GswIoi34WXJz5586UpUhwjehRZmtJ3eGPkU9Bjr8x3/KpLT+F9W18m6it1iQnHMBgt8x3qf0PhcTyJJcgcmMnzNaDpoS0RIoVCoOgFc08/pHXHx67kUjS/ZQ55JL2chgQcAdKuVjw1Z6dC3Iis52JxjNWdJQY87b01nZSDvXPkk37NoJJ9Iw/wBovD0dtqi3MKYSYEkKOhFVLQ5DZavb3HxBoZQ2Bt371unF1hFe6U5kXJTfp271j15YGAyAKPPJPX/naurx8jcaZzeRjp2ek7KZri0hlJGHRWGPlSh26kGo/hRxNw1psgOQ1um+PSpNlBrc5hLIPWikrnYilOUVzwxnoNqAEyy432owAPYUYxg1xU5WyKQHMDyoUYoW6UKAI9eg+WaMOo9TXFG+3SlMbZGNulMBRRlRkVRvbFp0t5wcZI1JNnOJmA/pwQf1q+R9BXbm2tr+1lsrlQ8UyFGU/wAwosDylpfI07A/07ZqY0dliv489OYZpLWtDl4f4pu9Lkz/AAHJRj/MnVT9qSgu4LO5dpySwOwXrms8qvpG2JpbNo0UpPEMDJxUkx8LAx0rOeH+L7OErG4mTI3LJV4sdSt9V5FtnDMfI1w8HHZ6KkpaJ+0kLqCTt86YajrmnWRxNfQhicABsn8qqnGstxawLHcTXCQnYxxHk5vmahOG7sWOqQ2ttw5F7xMqsksoLBsnBJYA4xud6uMFIznLh2XyDVLPUkaJJVcEEFdwazXi7R20rU4xA7Nb3GSqnffPStU0ia41Fn98sDbSI3L1GPofKoLjyxRYILlgOW1uY5Gz/TkZqMb4THOPOLLbwdKY9B02xuFdLmO3VSHAGSAM4/8AlTrAA4G++Krd20d17hfWsfh3FtMnOjL8XKTyt+tWjkGBmu3FkctnFnxqFNCXKBjYUXlycY6DNLFa4RnGe+30rUwE8HvQwNqMBtRWB6jr2oYIMFFdrqq3KP6u+1dpARKilAnSk060utMAyr/enMI8s7dKRVacRLlaAMZ9suRxnppa3jQNZkLOD8Um52PoO3+77UG1lWzu+a1WNp3c/G4/Dv1rVfbhpJeysdejzmykEUv+xiMH7jH1rLrbThc3rIsoDc+eU+RrOfStm2PvRaNN0+bU7O5XXrlCpz4E0RHMT225dgAD9/Soz2dXcljxR4AfmQsRirQmmGz0p/DQKOT8XeqHw8zR8TQMhOEl+I1zqfOMjs4cJRN/13SU1a1MUo/EMhu4PYioPTeHBpUnM1zcHbBGRuPtVohkkltYpIl5vhFNL2aRSC6fMVho0j+DzT4hyZjj5V9Tmo3iW0Se1ljkXKuhDDsalNOvYjCBUdxBdIlrK43IHSiSVdEpvkDh+I3trDfFywlhjTlznl5Rg59cirSVBB8/Oqn7MbhbvQJhvmG5kQgnoM5A+xFW/l2x2ruww4qzhzZOUq/BJRnfGPSuYzSoQD6UULvk9a2MAhGDkeWK4qDalStBV6+lJjABQo3Qb0KAIBTThN8U1Q06iOexpgOEFOYx8NN1BzgDHrTmPpSAaahptrrGn3WnX6CS3uYyjr+49QcGvOd3ay6Nrs1pKWd7OXwWc/zAHY/avTSoQcg9awf20ac+lcVR6ggPh3seW22JU7/rmpkrRcJcZElfarGdDKqcEris1tNQ9wuGuEjMkvic3L2YU6fVGeCOMZOSARUUgEssUksnhxMchB+Ij5Vhix0nZ1ZcttcdmuWHHUA0lF1GaWzWRv4awtl8DzONqfQ8faNBF4RkuJXH8027H5mqvpVl71pixHSoLiP+SabZgem2f7VZbfhRrm2SJpIl5zlhHGCE9Cx6/apaidPCdWyT0viHTNWce5v4cpGeUmoHjTX0FuILZwJJACe9N7zhSPhTWYbyC6drFo3+Fxgxtj086omq3rSXUzA7EYXvsOlTHGnL6mUptR7Ng9hxMuhajPnaS7HX0Rf3z9q0jGKqnst0htI4Lso5kC3E4M0wC45Wbt9BtVtruS6POewpx5Vzlo+KGPKnQrE+WgEwSfOlMGuAUqGF5c0KPiu0UBWI6dxfPFNkB5jsMU8hG4pAKorY6g05RT50kgGQMdacoKADqtV/j3hiLinh+azIAuEHPbt0w3lntnpVjXyzUJxTxdovC1q82q3aLJyFo7dPilk9Av7nAqkI8qX9pcaZfTWGoRyRTRNh1YYNSCG3laJliARAAVBzUrx5xknGuoLPHpsFj4YwsmeaWTy5j0x8h9ar2nTCCceMSEJztjrg1E42ujTHKnbL5pF5qMNvy2dtCQGHIX7VpvCdvdpbK+pXAklPRRsBWOWXFK20fhRoOVh1Pyp0/Ht3EiqknKq7ZG++Nvp/euX45t9o7nmjWy1e1rV0eH3G1fMp6EHqfKq57OtBj1bVhe3iuYLfkZY8ZDt1H0B/So3R9I1Li+8UoHFu+7zt0QdcA9zmtp0LRbfTLK3t4UVBEoX4R1xVSaxxr2YxTm7eixaVcRIvu7OA+coDtzD0qTHXYHFVy5txNy5Gw/Ko7WYL2KxmntdQu7aWFC6NHIcbDOCpyCPpSxZ6qMicmC/smXXNCsv4d9pk6O8OvwGYAj+NAgDKCO653+laHpGr6frEAm066jmXuAfiX5jqK73Bo47HwFcxRtutCpGcoV2hQBWIzjrT6Jc9Rmm0UR22z2qs8Re0nROHppLJBLfX0Rw8MA+FDtszHb7ZqUr0U+i8xqOgFRXE3FuicK2/i6vdqkhGUt4/ilf5L+52rGdb9q/EWqK8VgsGmwnvEC0n1Y/sBWdzma6uHlmkeaRjl5ZGLMx9SdzVrG/ZLkjR+KPbNrOpB4tFhXTbToH2aZx/u6L9B9azK5uJrqeS4uZZJZpDl5JGLMx9SdzQmG4jHnXOXLEdhVUI5AeUk0+t4lkZcjcHIPrTBQc8w39KsOiWL3QWSPdM4OOx8qwy3Hs2xLl0R76cRszZBOQf6au3AfDdjNIJryyZyOjO+x+lSNvw7DNakMOZj51NaDZz2KiMMQidBXK8zaOuOFRZdbCyt7O3SG1hjhjAwFQVIRioe3uiSvTNTUG65OwrHZb6R1pFR443wBISAT5+X61TfaJxH4KtpGnkGZvgnbHT/SP3p3xfxVb2sLWmnkS3YO8i7iEjpjzas35nkuWllYmRjk5PTNel4ni39pnn58/qIg8bJEm5bk+Lc9T3NLWVzJZXIuLORopxuGjJUmjqqPGzE01deRObsK9SrOLsv2je0i/s+SPVo1u4iP8AMUBZF+fY/lWh6NxBpmsxg2NyrvjJibZx9KwC2kEqlW+L5045pI5keNvDdPwuCQw+RrGeBPRam0ei6FYzY8a8RWacsdzHMuMct0hfHyIIP512svgkX8iDe0jjptLEmj6M+Lx15Z7kf+DP8o/1/p86yiKFZDhAQn8zMclu+9ISM9wzSSMXd2JZicknqSfnT6KMvEFAIQKCcfLpWmPHSInJsSnj8RfDi2hX8RHeiLbCO3LYwO21OXIZo4FGCzYpTV3SCzIULzHYYrRom2+ivW9u08zsOgo8FuXaXCn4TVi0mxS30/nlX42GaR0qNTJebYA71msaKcyJtLMtkkEBfpUvYGbT5BLaScjHY43B/wBw6Gi2ygswwdzinckOMHGCPOr+ONULk7stGjcWxRNy6haOh7tCeZfscY+W9WdOJuH2TLXLoT2ML5/Q1mEIKnAP33pwQuDhB8sVzvwsTf4dC8vIlRfZeMNJgcG38ac9gI+Ufn/amOp8X6nqUXhwD3W3OxCEgn5t1+1VEEruqAdshaeW5eQnmy2PyqsfiYoO6In5OSfTYpI3wnJ38z+1J45QWBOaJIwMqqFO+/WuzMuOXPxZ8q6jAexLi1PNuOtIxBZQUJNO4gPdmxv6Uz07BuWTO3N0oAYM7W18y7co3qWGJIeYAn86Sv7FJXbnGN9tqY2E81ree5XB2xlG7EUWA+5/Cblblz2HehRrmOS4mUQcokZS2WHQA4xXKdgUiD8LDy3qYwEto+Xum/r1rlCs4BIQsvivZCeqRDl+9J3SifU7WF/wFzkD0oUKp6COyavPhhdRsFGBUdpA/wALeN358UKFHsS0GtVAukA6YqRulG5rlCgY3gUM7ZpwyhipNChTAJcbRrj0p7paj3YvvkkUKFIBK3/iXcxb+XAFCb/N+tdoUwJC1Y4I7AVHy/wtSVo9jk0KFICan+OOJj1OxqD4nRY7QXKDEsLryHyyaFCgCa0oCSQM4yfCH6/8UKFCkM//2Q==",
    review:
      "As a fitness trainer, I trust Cranvalor for its purity and effectiveness. My clients love it!",
  },
  {
    id: 3,
    name: "Samantha Roy",
    image: "data:image/jpeg;base64,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",
    review:
      "I’ve tried many brands, but Cranvalor stands out for its quality and affordability. Perfect for women looking to stay fit!",
  },
  {
    id: 4,
    name: "Ritika Gupta",
    image: "data:image/jpeg;base64,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",
    review:
      "The flavors are fantastic, and I feel energized after every use. Cranvalor truly delivers on its promise!",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials py-5" id="testimonials">
      <div className="container text-center">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonial-carousel">
          {testimonials.map((testimonial) => (
            <div className="testimonial-item" key={testimonial.id}>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <h4 className="testimonial-name">{testimonial.name}</h4>
              <p className="testimonial-review">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
